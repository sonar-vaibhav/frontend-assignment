import { Layout, Send, Users, MonitorSmartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      number: "01",
      icon: Layout,
      title: "User-Friendly Interface",
      description: "Our platform offers seamless task management to boost your efficiency."
    },
    {
      number: "02",
      icon: Send,
      title: "Collaborate & Share Effortlessly",
      description: "Invite team members to work together and achieve your goals faster."
    },
    {
      number: "03",
      icon: Users,
      title: "Effortless Collaboration",
      description: "Invite team members to work together and achieve your goals faster."
    },
    {
      number: "04",
      icon: MonitorSmartphone,
      title: "Seamless Access",
      description: "Stay connected and manage your tasks on the go with ease."
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary text-center mb-4">
          Transform Your Productivity with Our<br />Innovative To-Do List Features
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 lg:mt-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-muted/50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-3xl font-bold text-border">{feature.number}</span>
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                {feature.title}
              </h3>
              <div className="flex gap-1 mb-3">
                <div className="h-1 w-8 bg-primary rounded"></div>
                <div className="h-1 w-8 bg-primary/30 rounded"></div>
              </div>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
