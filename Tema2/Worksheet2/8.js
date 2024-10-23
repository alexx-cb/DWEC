let img1 = "https://www.google.com/search?client=firefox-b-d&sca_esv=4d564c34da167c02&sca_upv=1&sxsrf=ADLYWILX3yXF2bS0t1r_z2eYVjupeBPKmA:1727249053974&q=fernando+alonso&udm=2&fbs=AEQNm0CbCVgAZ5mWEJDg6aoPVcBgacM8wnpugOpoilxhR0Lwp7B-Gky1aJetEssIbsXJdQW9LPOUVcaFGc2PCpV6OdKpunov4mutJ1VMRDhbJo1IgpX7Q1DPqJgl9tflHS_ZQ3MXxXA4EJsOgV5fDotKJwD0lWZPETe5V8hzSIWbqGkHtoyS6HI&sa=X&ved=2ahUKEwiw0LOSyN2IAxUe1QIHHV9RN0AQtKgLegQIFBAB&biw=1536&bih=731&dpr=1.25#vhid=9GDEuBwBD2IiuM&vssid=mosaic";
let img2 = "https://www.google.com/search?q=carlos+sainz+jr&client=firefox-b-d&sca_esv=4d564c34da167c02&sca_upv=1&udm=2&biw=1536&bih=731&sxsrf=ADLYWIKNLnNAxihuFb65Kdk6gqlNh2V9XQ%3A1727249056304&ei=oLrzZo6lEpbOi-gPrOSq2AE&oq=carlos&gs_lp=Egxnd3Mtd2l6LXNlcnAiBmNhcmxvcyoCCAEyDRAAGIAEGLEDGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyBRAAGIAEMgoQABiABBhDGIoFMg0QABiABBixAxhDGIoFMgoQABiABBhDGIoFSIkTUN4EWLwKcAF4AJABAJgBvgGgAZsGqgEDMi40uAEDyAEA-AEBmAIHoAK2BqgCCsICBxAjGCcY6gLCAgQQIxgnwgIOEAAYgAQYsQMYgwEYigWYAweSBwMzLjSgB-Ai&sclient=gws-wiz-serp#vhid=HGIOwGck-yOPpM&vssid=mosaic";
let img3 = "https://www.google.com/search?client=firefox-b-d&sca_esv=4d564c34da167c02&sca_upv=1&sxsrf=ADLYWIJwiMbKMUO1JYgZp-sAs3AdKjnA9g:1727249142160&q=ford+gt&udm=2&fbs=AEQNm0CbCVgAZ5mWEJDg6aoPVcBgWizR0-0aFOH11Sb5tlNhdzTfxpAVBoexMFZnKJBpl_OnTFfcge8advfRBIXE7C_RTEs_-6X8R5LVF1D--bqpVZGXWqd1Qn1U9x3Ln25r5qCUxR42iKYGXv9gyYYZUA1jq47YK4bvHGnTJmNSvgBED4uWuHQ&sa=X&ved=2ahUKEwieybm8yN2IAxVp0wIHHZgbBL0QtKgLegQIDBAB&biw=1536&bih=731&dpr=1.25#vhid=IENMgilB20SfxM&vssid=mosaic";


let array = [];

let aleatorio = Math.trunc(Math.random()*(2)+1);

array.push(img1,img2,img3);
document.write(array[aleatorio]);
