document.getElementById('download-resume').addEventListener('click', function () {
    // Pasirenkame elementą, kurį norime konvertuoti į PDF
    var element = document.body;

    // Nustatome PDF konfigūraciją
    var opt = {
        margin:       0,
        filename:     'resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'landscape' }
    };

    // Konvertuojame ir atsisiunčiame PDF
    html2pdf().set(opt).from(element).save();
});