from datetime import datetime


notice_date = Element("clock")

current = datetime.now()

year = current.year
day = current.day
month = current.month
week_day = current.weekday()
date = ""
d = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
if week_day > 4:
    date = f"WEEKEND \n{d[week_day]} {day} / {month} / {year}"
else:
    date += f"WEEKDAY \n{d[week_day]} {day} / {month} / {year}"

notice_date.write(date)
