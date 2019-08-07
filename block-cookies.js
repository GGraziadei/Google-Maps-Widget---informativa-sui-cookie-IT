<script type="text/javascript">
// remember, these are the possible parameters for Set_Cookie:
// name, value, expires, path, domain, secure
Set_Cookie( 'test', 'none', '', '/', '', '' );
// if Get_Cookie succeeds, cookies are enabled, since 
//the cookie was successfully created.
if ( Get_Cookie( 'test' ) )
{
    document.write( 'cookies are currently enabled.' );
    /* 
    this is an example of a set cookie variable, if 
    you want to use this on the page or on another script 
    instead of writing to the page you would just check that value
    for true or false and then do what you need to do.
    /*
    cookie_set = true;
    // and these are the parameters for Delete_Cookie:
    // name, path, domain
    // make sure you use the same parameters in Set and Delete Cookie.
    Delete_Cookie('test', '/', '');
}
// if the Get_Cookie test fails, cookies 
//are not enabled for this session.
else
{
    document.write( 'cookies are not currently enabled.' );
    cookie_set = false;
}
</script>
