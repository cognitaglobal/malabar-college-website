import os

courses = [
    ("PGDCA", "Post Graduate Diploma in Computer Applications", "pgdca.html"),
    ("ADCTT", "Advanced Diploma in Computer Teacher Training", "adctt.html"),
    ("DCA", "Diploma in Computer Applications", "dca.html"),
    ("DCFM", "Diploma in Computerized Financial Management", "dcfm.html"),
    ("DFA", "Diploma in Financial Accounting", "dfa.html"),
    ("DDTP", "Diploma in Desktop Publishing", "ddtp.html"),
    ("DOA", "Diploma in Office Automation", "doa.html"),
    ("DIM", "Diploma in Multimedia", "dim.html"),
    ("CDECO", "Certificate in Data Entry and Computer Operations", "cdeco.html"),
    ("CIFA", "Certificate in Financial Accounting", "cifa.html"),
    ("CCA", "Certificate in Computer Applications", "cca.html"),
    ("CWD", "Certificate in Web Designing", "cwd.html"),
    ("CCAD", "Certificate in Computer Aided Design", "ccad.html"),
    ("CEO", "Certificate in Office Automation", "ceo.html"),
    ("Other Courses", "Specialized Short-term IT Courses", "other-courses.html"),
]

template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - School of IT</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header class="page-header">
            <h1 class="dept-title">{title}</h1>
            <p class="dept-desc">({full_name})</p>
            <div class="decorative-divider"></div>
        </header>

        <section class="glass-card" style="max-width: 800px; margin: 40px auto; text-align: center; padding: 50px;">
            <h3 style="color: var(--primary-blue); margin-bottom: 20px;">Course Description</h3>
            <p style="color: var(--text-mid); line-height: 1.8; margin-bottom: 30px;">
                Comprehensive training program covering core modules, practical sessions, and industry-relevant skills. 
                Our curriculum is designed to meet modern industrial standards.
            </p>
            
            <div style="background: rgba(0, 74, 173, 0.05); padding: 40px; border-radius: 20px; border: 1px dashed var(--primary-blue);">
                <span style="font-size: 3rem; display: block; margin-bottom: 10px;">📄</span>
                <p style="font-weight: 600; color: var(--primary-blue);">Course PDF will be uploaded here later.</p>
            </div>
        </section>

        <div style="text-align: center; margin-top: 50px;">
            <a href="sit.html" class="btn-primary">← Back to SIT</a>
        </div>
    </div>
</body>
</html>"""

for title, full_name, filename in courses:
    with open(filename, "w", encoding="utf-8") as f:
        f.write(template.format(title=title, full_name=full_name))
    print(f"Generated {filename}")
