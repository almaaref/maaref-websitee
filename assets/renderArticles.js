async function fetchMarkdownFiles() {
    const postFilenames = [
        "post-1.md",
        "post-2.md"
      // Add more manually, or automate with an index.json later
    ];  
    const posts = await Promise.all(
        postFilenames.map(async (filename) => {
            const res = await fetch(`/articles/${filename}`);
            const raw = await res.text();   
            const [, frontmatter, body] = raw.match(/---\n([\s\S]*?)---\n([\s\S]*)/);   
            const metadata = {};
            frontmatter.split('\n').forEach(line => {
                const [key, ...value] = line.split(':');
                metadata[key.trim()] = value.join(':').trim().replace(/"/g, '');
        }); 
        return {
            title: metadata.title || 'Untitled',
            date: metadata.date || '',
            html: marked.parse(body)
            };
        })
    );  
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function renderPosts(posts) {
    const container = document.getElementById('blogPosts');

    posts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'bg-white p-6 rounded-lg shadow';
        article.innerHTML = `
        <h2 class="text-2xl font-semibold mb-2">${post.title}</h2>
        <p class="text-sm text-gray-500 mb-4">${new Date(post.date).toLocaleDateString()}</p>
        <div class="prose max-w-none">${post.html}</div>
    `;
    container.appendChild(article);
    });
}

fetchMarkdownFiles().then(renderPosts);