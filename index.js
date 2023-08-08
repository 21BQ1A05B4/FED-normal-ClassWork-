
    function arithOp(op) {
        var n1, n2;
        n1 = parseInt(document.getElementById('n1').value);
        n2 = parseInt(document.getElementById('n2').value);
        if(op == 'add') {
            document.getElementById("res").value = " " + (n1+n2);
        }
        else if(op == 'sub') {
            document.getElementById("res").value = " " + (n1-n2);
        }
        else if(op == 'mul') {
            document.getElementById("res").value = " " + (n1*n2);
        }
        else {
            document.getElementById("res").value = " " + (n1/n2);
        }
    }