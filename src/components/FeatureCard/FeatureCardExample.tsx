import FeatureCard from '../FeatureCard';

const FeatureCardExample: React.FC = () => {
  const handleGetStarted = () => {
    console.log('Get Started clicked!');
  };

  const handleLearnMore = () => {
    console.log('Learn More clicked!');
  };

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      padding: '2rem',
      background: 'var(--color-background-secondary)'
    }}>
      <FeatureCard
        title="Build something amazing"
        description="Create stunning web experiences with modern tools and best practices."
        buttonText="Get Started"
        onButtonClick={handleGetStarted}
        gradient="purple"
      />
      
      <FeatureCard
        title="Scale with confidence"
        description="Deploy applications that grow with your business needs."
        buttonText="Learn More"
        onButtonClick={handleLearnMore}
        gradient="blue"
      />
      
      <FeatureCard
        title="Optimize performance"
        description="Deliver fast, reliable experiences to your users worldwide."
        buttonText="Get Started"
        onButtonClick={handleGetStarted}
        gradient="green"
      />
    </div>
  );
};

export default FeatureCardExample;
