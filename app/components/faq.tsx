import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion"

export function AccordionDemo() {
  return (
    <div className="p-4 bg-gray-50 mt-8">
      <h2 className="text-3xl font-bold text-center text-[#33c6f2] mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-11/12 mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>What courses does Zylux IT Academy offer?</AccordionTrigger>
          <AccordionContent>
            Zylux IT Academy offers a wide range of courses including Frontend Development, Backend Development, Full
            Stack Development, Cloud Computing, Cybersecurity, and Data Science. Our curriculum is regularly updated to
            reflect the latest industry trends and technologies.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How long are the courses at Zylux IT Academy?</AccordionTrigger>
          <AccordionContent>
            Course durations vary depending on the program. Our bootcamp-style courses typically run for 12-16 weeks
            full-time, while part-time options can extend to 24-36 weeks. We also offer shorter specialized courses and
            workshops that can range from a few days to several weeks.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Are there any prerequisites for joining Zylux IT Academy?</AccordionTrigger>
          <AccordionContent>
            While some of our advanced courses may require prior knowledge, many of our programs are designed for
            beginners with no previous coding experience. Each course listing specifies any prerequisites. We also offer
            preparatory courses for those looking to build a foundation before diving into more complex topics.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>What kind of support does Zylux IT Academy provide to students?</AccordionTrigger>
          <AccordionContent>
            We provide comprehensive support including one-on-one mentoring, career counseling, job placement
            assistance, and access to our alumni network. Our instructors are industry professionals who offer practical
            insights, and we have dedicated staff to help with technical issues and career development.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Does Zylux IT Academy offer online learning options?</AccordionTrigger>
          <AccordionContent>
            Yes, we offer both in-person and online learning options. Our online courses use state-of-the-art virtual
            classrooms and collaboration tools to ensure an interactive and engaging learning experience, comparable to
            our on-campus programs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>What certifications can I earn at Zylux IT Academy?</AccordionTrigger>
          <AccordionContent>
            Upon completion of our courses, students receive a Zylux IT Academy certificate. Additionally, many of our
            programs prepare students for industry-recognized certifications such as AWS Certified Solutions Architect,
            CompTIA Security+, and various Microsoft and Google certifications.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>How does Zylux IT Academy assist with job placement?</AccordionTrigger>
          <AccordionContent>
            Our career services team works closely with students to prepare them for the job market. This includes
            resume building, interview preparation, and networking opportunities. We also have partnerships with
            numerous tech companies and regularly host job fairs and recruitment events for our students.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

