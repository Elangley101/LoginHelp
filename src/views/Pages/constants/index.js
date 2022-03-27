let url;
let placeholder;
let dev = 'preprod';

if (dev == 'preprod')
{
    url = 'localhost/';
    placeholder = 'john@doe.com';
}
else if (dev == 'prod')
{
    url = "cit.marshall.edu/reactimage/";
    placeholder = 'john@marshall.edu';
}
const config = {
    url: url,
    placeholder: placeholder
}

export default config;