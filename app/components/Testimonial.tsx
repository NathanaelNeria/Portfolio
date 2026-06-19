"use client";

import { Quote } from "lucide-react";
import { testimonials } from "../lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Testimonial() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="p-6 md:p-8 border border-border rounded-2xl bg-card-bg/50 h-full flex flex-col">
                <Quote className="text-foreground/20 mb-4" size={40} />
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/50">{testimonial.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
