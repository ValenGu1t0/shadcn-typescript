import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


/* Podemos ingresar aca directamente los item que queramos ahorrando espacio y etiquetas */
const items = [ 
  {
    id: "item-1",
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern."
  },
  {
    id: "item-2",
    question: "Is it styled?",
    answer: "Yes. It comes with default styles that matches the other components&apos; aesthetic."
  },
  {
    id: "item-3",
    question: "Is it animated?",
    answer: "Yes. Its animated by default, but you can disable it if you prefer."
  }
]

function AccordionPage() {

  return (

    <div>
            
      {/* <Accordion type="single" collapsible className="w-full"> */}
      <Accordion type="multiple" className="w-full">
        
        { items.map((item) => 
        (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        )
        )}

      </Accordion>

    </div>
  );
}

export default AccordionPage;