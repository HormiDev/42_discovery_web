function cambia_fondo()
{
    document.documentElement.style.setProperty('--red', Math.floor(Math.random() * 256));
    document.documentElement.style.setProperty('--green', Math.floor(Math.random() * 256));
    document.documentElement.style.setProperty('--blue', Math.floor(Math.random() * 256));
    let currentFontSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--fontsize'));
    document.documentElement.style.setProperty('--fontsize', String(currentFontSize + 80) + '%');
}