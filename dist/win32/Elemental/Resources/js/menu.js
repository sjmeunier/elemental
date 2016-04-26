function generateMenu()
{
    var menu = null;

    menu = Titanium.UI.createMenu();
    
    var file = menu.addSubMenu("File");
    var help = menu.addSubMenu("Help");

    file.addItem("Exit", function () { Titanium.App.exit(); });

    help.addItem("About", function () { 
        var aboutBox = Titanium.UI.createWindow();
		aboutBox.setTitle("About Elemental");
		aboutBox.setURL("aboutbox.html");
		aboutBox.setWidth(400);
		aboutBox.setHeight(230);
		aboutBox.setUsingChrome(true);
		aboutBox.setFullScreen(false);
		aboutBox.open();
    });
    

    return menu;
}

Titanium.UI.setMenu(generateMenu());
