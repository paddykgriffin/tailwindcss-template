import React from 'react';

interface Props {
  title: string;
  subtitle: string;
}

const Hero = ({ title, subtitle }: Props) => {
  return (
    <section className="bg-orange py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-bold">{title}</h1>
        <h3 className="text-2xl font-semibold">{subtitle}</h3>
      </div>
    </section>
  );
};

export default Hero;
