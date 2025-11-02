const maskEmail = email => {
  // find where domain starts
  const domainPosition = email.indexOf("@");
  
  // split email into 2 parts
  const name = email.slice(0, domainPosition);
  const domain = email.slice(domainPosition);

  // keep first and last character, mask the middle
  const maskedName = 
    name[0] + "*".repeat(name.length - 2) + name[name.length - 1];

  // combine masked name with domain
  return maskedName + domain;
}
// example
const email = "user@domain.org";
console.log(maskEmail(email))
