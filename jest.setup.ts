import { installGlobals } from "@remix-run/node";
// The following call to installGlobals() causes conflicts 
//  and every test in this project will fail. 
installGlobals()
