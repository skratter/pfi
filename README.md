# PFI - Progressive Fhem Interface
A socket.io based graphical interface for FHEM.  
**DEMO:** https://pfi.skratter.com

Currently i would say this thing is in early alpha.

**Supported Devices:**
- Powerplugs
- Lights (dim and without) - longpress for dimmer.
- Wake on Lan

---

**Requirements**  
A working [fhem.js](https://github.com/winne27/fhem.js) connected with your FHEM Server. You just need to install and set the parameters for FHEM connection. Don't worry about the client stuff. PFI will handle it.

**Installation**
1. Download or clone Git Repository
2. Run `npm install` to get all needed Packages.
3. Change `/config/example.config.js` to `/config/config.js` and change settings in it.
4. Set rooms and devices in `/config/json/rooms.json` and `/config/json/home.json`, example data is there.
5. Run `npm run prod` to generate build.
6. Copy content of dist to webserver.
7. Have fun! :-)

More description will be here later. For Questions just contact me.
