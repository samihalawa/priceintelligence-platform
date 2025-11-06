import React from 'react';
import { Typography, Row, Col, Divider, Space } from 'antd';
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined, 
  TwitterOutlined, 
  LinkedinOutlined, 
  GithubOutlined 
} from '@ant-design/icons';

const { Text, Title } = Typography;

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Product',
    links: [
      { title: 'Features', href: '#features' },
      { title: 'Pricing', href: '#pricing' },
      { title: 'API Documentation', href: '#api' },
      { title: 'Integrations', href: '#integrations' },
      { title: 'Security', href: '#security' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { title: 'E-commerce', href: '#ecommerce' },
      { title: 'Retail', href: '#retail' },
      { title: 'Manufacturing', href: '#manufacturing' },
      { title: 'SaaS', href: '#saas' },
      { title: 'Marketplace', href: '#marketplace' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { title: 'Documentation', href: '#docs' },
      { title: 'API Reference', href: '#api' },
      { title: 'Case Studies', href: '#cases' },
      { title: 'Blog', href: '#blog' },
      { title: 'Webinars', href: '#webinars' }
    ]
  },
  {
    title: 'Company',
    links: [
      { title: 'About Us', href: '#about' },
      { title: 'Careers', href: '#careers' },
      { title: 'Contact', href: '#contact' },
      { title: 'Press', href: '#press' },
      { title: 'Partners', href: '#partners' }
    ]
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <div className="mb-6">
              <Title level={3} className="text-white mb-4">
                PriceIntelligence
              </Title>
              <Text className="text-gray-300 block mb-4">
                AI-powered pricing optimization platform that helps businesses 
                maximize revenue through intelligent pricing strategies.
              </Text>
              
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <EnvironmentOutlined className="mr-3 text-blue-400" />
                  <Text className="text-gray-300">
                    123 Business Ave, Suite 100<br />
                    San Francisco, CA 94107
                  </Text>
                </div>
                <div className="flex items-center text-gray-300">
                  <PhoneOutlined className="mr-3 text-blue-400" />
                  <Text className="text-gray-300">+1 (555) 123-4567</Text>
                </div>
                <div className="flex items-center text-gray-300">
                  <MailOutlined className="mr-3 text-blue-400" />
                  <Text className="text-gray-300">hello@priceintelligence.com</Text>
                </div>
              </div>
            </div>
          </Col>
          
          {footerSections.map((section, index) => (
            <Col xs={12} sm={12} md={4} key={index}>
              <div>
                <Title level={5} className="text-white mb-4">
                  {section.title}
                </Title>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
        
        <Divider className="border-gray-700 my-8" />
        
        <Row justify="space-between" align="middle">
          <Col xs={24} sm={12}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <Text className="text-gray-400 text-sm">
                © 2024 PriceIntelligence Platform. All rights reserved.
              </Text>
              <div className="flex space-x-4">
                <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </Col>
          
          <Col xs={24} sm={12}>
            <div className="flex justify-start sm:justify-end mt-4 sm:mt-0">
              <Space size="middle">
                <a 
                  href="#twitter" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <TwitterOutlined className="text-lg" />
                </a>
                <a 
                  href="#linkedin" 
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedinOutlined className="text-lg" />
                </a>
                <a 
                  href="#github" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <GithubOutlined className="text-lg" />
                </a>
              </Space>
            </div>
          </Col>
        </Row>
        
        <div className="mt-8 pt-6 border-t border-gray-800">
          <Row justify="center">
            <Col>
              <Text className="text-gray-500 text-xs text-center block">
                Made with ❤️ for businesses that want to optimize their pricing strategies
              </Text>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default Footer;