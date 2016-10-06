const p = require('puddles')

const Footer = require('./footer')
const Hero   = require('./hero')
const Layout = require('./layout')

const Services = ({ services }) =>
  p('div.services', [
    Hero('Services', services.hero),

    p('div.copy', [
      p('h2.heading', 'Installation'),

      p('p', `Sign Partners installs a large portion of the signs we provide to the Atlanta metro area. We cut a pretty wide swath from Chattanooga to Macon, Tallapoosa to Greensboro, and Columbus to Commerce. Our history includes provision of signs for as far away as Oakland California complete with installation. The important thing is that your project is on time and installed in a professional manner. We are happy to help.`),

      p('h2.heading', 'Layout'),

      p('p', `A layout is a akin to a drawing of what proposed signs will look line on installation. It is proportional in dimension and color so that what you see in the layout is what you get. This helps us to make a proper representation to you and a mutual understanding of our transaction.`),

      p('h2.heading', 'Matching'),

      p('p', `Many facilities have matching sets of signs throughout. Aging properties with management and ownership changes often lose touch with original sign producers. This can make low quantity replacements difficult to find. We have had good success helping companies through out the metro area with signs that match the originals. This helps owners and managers the heartache of having to choose between mismatched signs or total replacement programs.`),

      p('h2.heading', 'Permitting'),

      p('p', `Virtually all governmental jurisdictions have codes which regulate signage. Many types of signs require permits. Applications may at times be completed by customers. However, more often than not, we complete this process for our customers. Experience gives our folks a conversational relationship with those in charge of approving applications. This helps to speed the process for everyone.`),

      p('h2.heading', 'Production'),

      p('p', `As in most any industry, no one makes all of everything that they put into the stream of commerce. Your best choice for signs will come when you are comfortable that your sign provider cares about your needs and understands the application.`),

      p('p', `This is best accomplished when you ask questions of the sign provider and when we ask you questions about things you may not have considered. This way we can all work to bring the right components, assembly and installation techniques together to fit your application and pocket book.`),

      p('h2.heading', 'Repair'),

      p('p', `A little work can bring a sign back to live for a fraction of the cost of full replacement. Many times, fresh paint is all that is needed. The picture gallery in the section shows just how elegant this affordable option can look.`),

      p('h2.heading', 'Surveys'),

      p('p', `Assistance in sign surveys helps us to understand what exists in light of what is we need. In the long run these surveys can help save time, effort and expense. Sign surveys come in all types and sizes. A phone call can go a long way to help understand the investment of a sign survey. In addition, the cost of surveys can often be taken off the price of acquisition.`)
    ]),

    Footer()
  ])

module.exports = Layout(Services)
