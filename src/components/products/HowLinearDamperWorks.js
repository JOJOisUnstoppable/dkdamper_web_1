import React from 'react';

const HowLinearDamperWorks = () => {
  return (
    <section className="bg-white p-12 rounded-lg shadow-xl my-16 mx-40">
      <h2 className="text-6xl font-bold text-[#2c3e50] border-b-4 border-[#3498db] pb-2 mb-8">
        How Does a Linear Damper Work?
      </h2>
      <p>
        Linear dampers operate by converting kinetic energy into thermal energy through hydraulic resistance. When a force acts on the piston rod, it pushes the piston, compressing the hydraulic oil inside. This oil is then forced through specially designed orifices, creating resistance that slows down or cushions the movement.
      </p>
      <h3 className="text-xl font-bold text-[#34495e] mb-4 mt-8">
        Energy Absorption Principles
      </h3>
      <p>
        When an object hits the piston rod, the motion is transferred to the oil in the pressure chamber through the piston rod. As a result, the oil inside the pressure chamber flows out of the orifices located in the inner tube. This causes compression in the pressure chamber. The product of this hydraulic pressure and the pressure-applied area of the piston is resistance, which acts on the colliding object.
      </p>
      <p>
        The hydraulic pressure generated inside the pressure chamber is proportional to the square velocity of the colliding object, as long as the orifice size, oil viscosity, etc. are constant. This is called <strong>velocity-squared resistance</strong>.
      </p>
      <h3 className="text-xl font-bold text-[#34495e] mb-4 mt-8">
        Key Components
      </h3>
      <h4 className="text-lg font-bold text-[#2c3e50] mb-2 mt-4">
        Piston and Piston Rod
      </h4>
      <p>
        When an external force acts on a linear damper, this force will first be transmitted to the piston rod. The piston rod is a crucial component connecting the external object and the inside of the damper. Following this, the piston rod will push the piston connected to it to move inside the damper's cylinder, and the piston is typically a specially designed part with orifices on it.
      </p>
      <h4 className="text-lg font-bold text-[#2c3e50] mb-2 mt-4">
        Hydraulic Oil
      </h4>
      <p>
        Linear dampers control motion by using fluid resistance. When force is applied, a piston moves within a cylinder filled with hydraulic oil. The oil is forced through small openings (orifices). This restricted flow creates a resistance force that opposes the motion, providing the damping effect.
      </p>
      <p>
        The viscosity of the hydraulic oil is important because it affects the level of resistance. Different types of linear dampers, classified by overflow type (single or multi-hole) and thrust direction (push-in, pull-out, two-way), all rely on this principle of hydraulic oil creating resistance.
      </p>
      <h4 className="text-lg font-bold text-[#2c3e50] mb-2 mt-4">
        Orifices
      </h4>
      <p>
        Orifices are crucial in linear dampers because they are the primary means of controlling the damping force. They are small, precisely sized openings in the piston of the damper. As the piston moves, it forces hydraulic oil to flow through these orifices.
      </p>
      <p>
        The size and design of the orifices directly regulate the rate at which the hydraulic oil can flow. Smaller orifices restrict the oil flow more, resulting in higher resistance and a greater damping force, thus slowing down the motion more significantly. Conversely, larger orifices allow for easier oil flow, leading to less resistance and a smaller damping force.
      </p>
    </section>
  );
};

export default HowLinearDamperWorks;