function txtdogrula()
{
    var sonSayi = 100 - document.getElementById("txt").value.length;
    if (sonSayi >= 0)
    {
        document.getElementById("klnkrktr").innerHTML = sonSayi;
    }
    else
    {
        document.getElementById("txt").value = document.getElementById("txt").value.substring(0, 100);
        document.getElementById("klnkrktr").innerHTML = 0;
    }
}