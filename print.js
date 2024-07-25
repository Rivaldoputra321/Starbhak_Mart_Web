$(document).ready(function() {
    $("#bayar").click(function() {
        console.log("Tombol 'bayar' ditekan!");
        var kiriID = $("#cart").attr("id");
        console.log("ID cart:", kiriID);

        // Logika lain yang ingin Anda jalankan saat tombol 'bayar' ditekan

        // Memanggil fungsi pencetakan saat tombol 'bayar' ditekan
        window.print();
    });

    // Fungsi untuk mendeteksi kombinasi "Ctrl + P"
    $(document).keydown(function(event) {
        // Ctrl + P
        if (event.ctrlKey && event.key === 'p') {
            console.log("Tombol 'Ctrl + P' ditekan. Melakukan pencetakan...");

            // Pastikan untuk menghentikan aksi default (pencetakan default browser)
            event.preventDefault();

            // Memanggil fungsi pencetakan saat kombinasi "Ctrl + P" ditekan
            window.print();
        }
    });
});
