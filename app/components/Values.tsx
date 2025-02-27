import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Lightbulb, Users } from 'lucide-react'
export default function Values() {
  return (
    <div>
         <section className="w-full  py-12 md:py-24 bg-muted">
        <div className="containerw-11/12 mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#33c6f2]  px-3 py-1 text-sm text-white">
                Our Core Values
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#33c6f2]">What Drives Us Forward</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Our values shape everything we do, from curriculum design to student support
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Card className="bg-[#33c6f2] backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Innovation</h3>
                <p className="text-muted-foreground text-white">
                  We embrace cutting-edge technologies and methodologies, constantly evolving our curriculum to stay
                  ahead of industry trends.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#33c6f2] backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Community</h3>
                <p className="text-muted-foreground text-white">
                  We foster a collaborative environment where students learn from each other and build lasting
                  professional networks.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#33c6f2] backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Excellence</h3>
                <p className="text-muted-foreground text-white">
                  We maintain the highest standards in education, pushing our students to achieve their full potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
