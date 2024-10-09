Develop DNS module with sample  coding.

const dns = require('dns').promises; 
class DNSModule {
 
  async resolveA(hostname) {
    try {
      const addresses = await dns.resolveA(hostname);
      console.log(`A records for ${hostname}:`, addresses);
      return addresses;
    } catch (error) {
      console.error(`Error resolving A records for ${hostname}:`, error.message);
    }
  }
  async resolveMX(hostname) {
    try {
      const mxRecords = await dns.resolveMX(hostname);
      console.log(`MX records for ${hostname}:`, mxRecords);
      return mxRecords;
    } catch (error) {
      console.error(`Error resolving MX records for ${hostname}:`, error.message);
    }
  }

  async reverseLookup(ipAddress) {
    try {
      const hostname = await dns.reverse(ipAddress);
      console.log(`Reverse lookup for ${ipAddress}:`, hostname);
      return hostname;
    } catch (error) {
      console.error(`Error performing reverse lookup for ${ipAddress}:`, error.message);
    }
  }
}

async function runSample() {
  const dnsModule = new DNSModule();

  await dnsModule.resolveA('example.com'); 
  await dnsModule.resolveMX('gmail.com'); 
  await dnsModule.reverseLookup('8.8.8.8'); 
}

runSample();
