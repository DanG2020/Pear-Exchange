import React from 'react';
import './WhyPear.css';

const WhyPear: React.FC = () => {
  return (
    <div className="why-pear">
      <div className="hero-section hero-1">
        <h1>Launching a model</h1>
        <p>You like money, we like money, launch your own model and earn some</p>
        <button className="hero-button">Let's go</button>
      </div>
      <div className="pear-box">
        <div className="pear-section">
          <h2>Why Launch on Pear Exchange?</h2>
          <div className="info-box">
            <p>Launching AI models on our blockchain-based AI model exchange platform offers several unique advantages that cater to both model creators and users.</p>
            <ol>
              <li>
                <strong>Decentralized and Secure:</strong> Our platform leverages blockchain technology to provide a decentralized environment where your AI models are secure and tamper-proof. The immutability of blockchain ensures that once your model is uploaded, it cannot be altered or deleted by unauthorized parties.
              </li>
              <li>
                <strong>Ownership and Control:</strong> As a model creator, you retain full ownership and control over your intellectual property. Our platform ensures that your models are protected, and you decide how they are shared or sold.
              </li>
              <li>
                <strong>Transparent Transactions:</strong> Utilizing smart contracts on the NEAR Protocol, all transactions are transparent and automatically enforced. This guarantees that you receive fair compensation for your work and that all transactions are visible and verifiable on the blockchain.
              </li>
              <li>
                <strong>Monetization Opportunities:</strong> Our platform allows you to monetize your AI models effortlessly. By setting your pricing and licensing terms, you can earn NEAR tokens whenever someone purchases or accesses your model. This provides a steady revenue stream and maximizes the value of your models.
              </li>
              <li>
                <strong>Model Verification:</strong> We implement mechanisms for verifying the authenticity and performance of models. This ensures that users can trust the quality and effectiveness of the models available on our platform, enhancing your reputation as a reliable model creator.
              </li>
              <li>
                <strong>Broad Exposure:</strong> By listing your AI models on our platform, you gain access to a global audience of developers, researchers, and businesses looking for cutting-edge AI solutions. This broad exposure can lead to more downloads, purchases, and collaborations.
              </li>
              <li>
                <strong>Community and Support:</strong> Join a vibrant community of AI enthusiasts, developers, and researchers. Our platform provides resources, forums, and support to help you improve your models, troubleshoot issues, and stay updated with the latest advancements in AI and blockchain technology.
              </li>
              <li>
                <strong>Innovation and Collaboration:</strong> Our platform fosters innovation by enabling easy collaboration between model creators and users. You can find collaborators for your projects, get feedback on your models, and work together to develop new and improved AI solutions.
              </li>
              <li>
                <strong>Ethical and Responsible AI:</strong> We are committed to promoting ethical and responsible AI development. By participating in our platform, you contribute to a community that values transparency, fairness, and the responsible use of AI technologies.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="hero-section hero-2">
        <h1>Sound good?</h1>
        <p>Join Pear below and feel the difference for yourself.</p>
        <button className="hero-button">Let's go</button>
      </div>
    </div>
  );
};

export default WhyPear;