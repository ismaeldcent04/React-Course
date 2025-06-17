import Accordion from './components/accordion/Accordion';
import AccordionItem from './components/accordion/AccordionItem';

function App() {
  const items = [
    {
      title: 'We got 20 years of experience',
      subtitle: "You can't go wrong with us.",
      content:
        'We are in the business of planning highly individualized vacation trips for more than 20 years.',
    },
  ];
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className={'accordion'}>
          {items.map((item) => {
            return (
              <AccordionItem
                id={'experience'}
                className={'accordion-item'}
                title={item.title}
              >
                <article>
                  <p>{item.subtitle}</p>
                  <p>{item.content}</p>
                </article>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>
    </main>
  );
}

export default App;
