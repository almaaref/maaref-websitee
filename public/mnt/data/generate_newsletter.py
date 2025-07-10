import json

newsletters = [
    {
        "id": "week5",
        "week": 5,
        "title": "Parent Workshop",
        "date": "Sept 25 – Oct 4, 2024",
        "content": "Example content for week 5..."
    }
    # Add more...
]

js_code = f"const newsletters = {json.dumps(newsletters, indent=2)};"
with open("newsletters.js", "w", encoding="utf-8") as f:
    f.write(js_code)
