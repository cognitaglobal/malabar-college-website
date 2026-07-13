import os
import shutil

courses = [
    'adctt', 'dcfm', 'dfa', 'ddtp', 'doa', 'dim', 'cdeco', 'cifa', 'cca', 'cwd', 'ccad', 'ceo', 'other-courses',
    'pgdls', 'pdls', 'dlwdm', 'ccwim', 'ccrdm', 'ccsff', 'cceim', 'cccrm', 'ccedm', 'ccacm',
    'pgdha', 'dha', 'pdha', 'ccmc'
]

for course in courses:
    shutil.copy('dca.html', f'{course}.html')
    print(f'Created {course}.html')
