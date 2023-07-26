"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Helvizar",
    avatar: "H",
    title: "Software Engineer",
    description: "Optimizing performance, this AI app is a programmer's ally."
  },
  {
    name: "Okky",
    avatar: "O",
    title: "Back-end Developer",
    description: "With this app, staying organized and on track has never been easier."
  },
  {
    name: "Trias",
    avatar: "T",
    title: "Digital Marketer",
    description: "My digital marketing efforts have reached new heights with increased efficiency and ROI."
  },
  {
    name: "Morgan",
    avatar: "M",
    title: "Software Engineer",
    description: "Genius can detect bugs, saves me time and headaches during development."
  }
]

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}