import React, { useState } from 'react';
import { Modal, Form, Input, Select, Button, Typography, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { MailOutlined, PhoneOutlined, MessageOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;
const { Title } = Typography;

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  reason?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ 
  isOpen, 
  onClose, 
  title = 'Contact Us',
  reason = ''
}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      message.success('Thank you for your message! We\'ll get back to you within 24 hours.');
      form.resetFields();
      onClose();
    }, 1000);
  };

  const handleClose = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title={
        <div className="flex items-center gap-2">
          <MessageOutlined className="text-blue-600" />
          {title}
        </div>
      }
      open={isOpen}
      onCancel={handleClose}
      footer={null}
      width={600}
      destroyOnClose
    >
      <div className="py-4">
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <Title level={5} className="text-blue-900 mb-2">
            Get in touch with our team
          </Title>
          <p className="text-blue-800 text-sm">
            We're here to help you find the perfect solution for your business needs.
          </p>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ reason }}
        >
          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[{ required: true, message: 'Please enter your first name' }]}
            >
              <Input placeholder="John" size="large" />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[{ required: true, message: 'Please enter your last name' }]}
            >
              <Input placeholder="Doe" size="large" />
            </Form.Item>
          </div>

          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' }
            ]}
          >
            <Input placeholder="john@example.com" size="large" />
          </Form.Item>

          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              name="phone"
              label="Phone Number"
            >
              <Input placeholder="+1 (555) 123-4567" size="large" />
            </Form.Item>
            <Form.Item
              name="company"
              label="Company"
            >
              <Input placeholder="Your Company" size="large" />
            </Form.Item>
          </div>

          <Form.Item
            name="reason"
            label="What can we help you with?"
            rules={[{ required: true, message: 'Please select a reason' }]}
          >
            <Select placeholder="Select a reason" size="large">
              <Option value="pricing">Pricing Information</Option>
              <Option value="demo">Request a Demo</Option>
              <Option value="enterprise">Enterprise Solutions</Option>
              <Option value="support">Technical Support</Option>
              <Option value="partnership">Partnership Opportunities</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: 'Please enter your message' }]}
          >
            <TextArea 
              rows={4} 
              placeholder="Tell us about your needs..."
              size="large"
            />
          </Form.Item>

          <div className="flex gap-3 pt-4">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              size="large"
              className="flex-1"
            >
              Send Message
            </Button>
            <Button onClick={handleClose} size="large">
              Cancel
            </Button>
          </div>
        </Form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <MailOutlined className="text-blue-600 text-lg mb-2" />
              <div className="text-sm font-medium">Email</div>
              <a 
                href="mailto:contact@priceintelligence.ai" 
                className="text-blue-600 text-xs hover:underline"
              >
                contact@priceintelligence.ai
              </a>
            </div>
            <div>
              <PhoneOutlined className="text-blue-600 text-lg mb-2" />
              <div className="text-sm font-medium">Phone</div>
              <a 
                href="tel:+15551234567" 
                className="text-blue-600 text-xs hover:underline"
              >
                +1 (555) 123-4567
              </a>
            </div>
            <div>
              <MessageOutlined className="text-blue-600 text-lg mb-2" />
              <div className="text-sm font-medium">Live Chat</div>
              <div className="text-xs text-gray-600">Available 24/7</div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;