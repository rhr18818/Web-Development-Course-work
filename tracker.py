import json
from datetime import datetime, timedelta

# Generate sample data for 107 completed classes from Jan 1 to current date (Mon-Sat only)
start_date = datetime(2025, 1, 25)
today = datetime(2025, 6, 4)
weekdays = [0, 1, 2, 3, 4, 5]  # Monday to Saturday

class_data = []
class_no = 1
current_date = start_date

#updating ---
while class_no <= 25 :
    if current_date.weekday() in weekdays:
        class_data.append({
            "class_no": f"Day_{class_no}",
            "date": current_date.strftime("%d-%m-%Y"),
            "topic": "Basic",
            "notes": "🖊️ Took handwritten notes...!",
            "attended": True,
            "needs_revision": False,
            "gap_covered": ""
        })
        class_no += 1
    current_date += timedelta(days=1)

# Create 107 class entries
while class_no <= 107 and current_date <= today:
    if current_date.weekday() in weekdays:
        class_data.append({
            "class_no": f"Day_{class_no}",
            "date": current_date.strftime("%d-%m-%Y"),
            "topic": "DSA",
            "notes": "",
            "attended": True,
            "needs_revision": False,
            "gap_covered": ""
        })
        class_no += 1
    current_date += timedelta(days=1)

# Save to tracker.json
tracker_path = "tracker.json" # Changed path from "/mnt/data/tracker.json"
with open(tracker_path, "w") as f:
    json.dump(class_data, f, indent=2)

tracker_path