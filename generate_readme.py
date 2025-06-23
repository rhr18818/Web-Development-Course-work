import json

# Open your JSON data file
with open("tracker.json", "r") as file:
    data = json.load(file)

# Start building the Markdown string
markdown = "# 📅 Course Progress Tracker (Jan–Jun 2025)\n\n"
markdown += "| # | Date | 🏷️ Topic | 🎥 Attended? | 🔁 Revision? | 📝 Notes | ⏳ Gap Covered? |\n"

# --- THIS IS THE CORRECTED LINE ---
# Add colons to center the content in each column
markdown += "|:---:|:----:|:--------:|:-----------:|:-----------:|:--------:|:--------------:|\n"

# Loop through your data and create a table row for each entry
for entry in data:
    # This logic looks good! It converts boolean true/false to checkmarks
    attended = "✅" if entry["attended"] else "❌"
    revision = "✅" if entry["needs_revision"] else "❌"
    
    # This line remains exactly the same as you had it
    markdown += f"| {entry['class_no']} | {entry['date']} | {entry['topic']} | {attended} | {revision} | {entry['notes']} | {entry['gap_covered']} |\n"

# Write the final Markdown content to your README.md file
with open("README.md", "w",encoding="utf-8") as readme:
    readme.write(markdown)

print("✅ README.md has been successfully generated with centered columns!")