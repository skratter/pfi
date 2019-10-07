# PFI - Progressive Fhem Interface
A socket.io based graphical interface for FHEM.
**DEMO:** https://pfi.skratter.com

Currently i would say this thing is in early alpha.

**Supported Devices:**
- Powerplugs
- Lights (dim and without) - longpress for dimmer.
- Wake on Lan

**Currently working on**
- `data.json` implementation

---

**Requirements**
  A working [fhem.js](https://github.com/winne27/fhem.js). You just need to install and set the parameters for FHEM connection. Don't worry about the client stuff. PFI will handle it.

**Installation**
1. Download or clone Git Repository
2. Run `npm install` to get all needed Packages.
3. Change `settings.js`, disable DEMO Mode and set IP of Fhem.js Server. *If you like to use secure connection, no problem. But you have to run this website on a secure host aswell.*
4. Set rooms and devices in `/src/data/data.json`, example data is there.
5. Run `npm run prod` to generate build.
6. Copy content of dist to webserver.
7. Have fun! :-)

More description will be here later. For Questions just contact me.
