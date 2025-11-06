import React, { useState } from 'react';
import { Modal, Form, Input, Select, Button, Typography, Divider, message, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import { 
  CreditCardOutlined, 
  CheckOutlined,
  SecurityScanOutlined,
  CrownOutlined
} from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;
const { Title, Text } = Typography;

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    name: string;
    price: string;
    period?: string;
    features: string[];
  } | null;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose, plan }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      message.success(`🎉 Welcome to ${plan?.name}! Your subscription is now active.`);
      form.resetFields();
      setCurrentStep(1);
      onClose();
    }, 2000);
  };

  const handleClose = () => {
    form.resetFields();
    setCurrentStep(1);
    onClose();
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  if (!plan) return null;

  return (
    <Modal
      title={
        <div className="flex items-center gap-2">
          <CrownOutlined className="text-purple-600" />
          Subscribe to {plan.name}
        </div>
      }
      open={isOpen}
      onCancel={handleClose}
      footer={null}
      width={700}
      destroyOnClose
    >
      <div className="py-4">
        {/* Plan Summary */}
        <Card className="mb-6 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <Title level={4} className="text-purple-900 mb-1">{plan.name}</Title>
              <Text className="text-purple-700">
                {plan.features.length} features included
              </Text>
            </div>
            <div className="text-right">
              <Title level={3} className="text-purple-900 mb-0">{plan.price}</Title>
              {plan.period && <Text className="text-purple-700">{plan.period}</Text>}
            </div>
          </div>
        </Card>

        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-6">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            1
          </div>
          <div className={`w-12 h-1 mx-2 ${
            currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'
          }`} />
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            2
          </div>
          <div className={`w-12 h-1 mx-2 ${
            currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'
          }`} />
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            3
          </div>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          {currentStep === 1 && (
            <div>
              <Title level={5} className="mb-4">Account Information</Title>
              
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
                <Input placeholder="john@company.com" size="large" />
              </Form.Item>

              <Form.Item
                name="company"
                label="Company Name"
                rules={[{ required: true, message: 'Please enter your company name' }]}
              >
                <Input placeholder="Your Company" size="large" />
              </Form.Item>

              <Form.Item
                name="industry"
                label="Industry"
              >
                <Select placeholder="Select your industry" size="large">
                  <Option value="technology">Technology</Option>
                  <Option value="healthcare">Healthcare</Option>
                  <Option value="finance">Finance</Option>
                  <Option value="retail">Retail</Option>
                  <Option value="education">Education</Option>
                  <Option value="manufacturing">Manufacturing</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>

              <div className="flex justify-end pt-4">
                <Button type="primary" onClick={nextStep} size="large">
                  Continue
                </Button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <Title level={5} className="mb-4">Payment Information</Title>
              
              <Form.Item
                name="cardNumber"
                label="Card Number"
                rules={[{ required: true, message: 'Please enter your card number' }]}
              >
                <Input 
                  placeholder="1234 5678 9012 3456" 
                  size="large"
                  prefix={<CreditCardOutlined />}
                />
              </Form.Item>

              <div className="grid grid-cols-2 gap-4">
                <Form.Item
                  name="expiry"
                  label="Expiry Date"
                  rules={[{ required: true, message: 'Please enter expiry date' }]}
                >
                  <Input placeholder="MM/YY" size="large" />
                </Form.Item>
                <Form.Item
                  name="cvv"
                  label="CVV"
                  rules={[{ required: true, message: 'Please enter CVV' }]}
                >
                  <Input placeholder="123" size="large" />
                </Form.Item>
              </div>

              <Form.Item
                name="cardName"
                label="Name on Card"
                rules={[{ required: true, message: 'Please enter name on card' }]}
              >
                <Input placeholder="John Doe" size="large" />
              </Form.Item>

              <Form.Item
                name="billingAddress"
                label="Billing Address"
                rules={[{ required: true, message: 'Please enter billing address' }]}
              >
                <TextArea rows={3} placeholder="123 Main St, City, State, ZIP" size="large" />
              </Form.Item>

              <div className="flex justify-between pt-4">
                <Button onClick={prevStep} size="large">
                  Back
                </Button>
                <Button type="primary" onClick={nextStep} size="large">
                  Review Order
                </Button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <Title level={5} className="mb-4">Review Your Order</Title>
              
              <Card className="mb-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Text strong>{plan.name} Subscription</Text>
                    <Text>{plan.price}{plan.period ? `/${plan.period}` : ''}</Text>
                  </div>
                  <div className="text-sm text-gray-600">
                    {form.getFieldValue('company')} - {form.getFieldValue('email')}
                  </div>
                </div>
              </Card>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <SecurityScanOutlined className="text-green-600" />
                  <Text strong>Security & Privacy</Text>
                </div>
                <Text className="text-sm text-gray-600">
                  Your payment information is encrypted and secure. 
                  We never store your card details.
                </Text>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <CheckOutlined className="text-blue-600" />
                  <Text strong>What's included:</Text>
                </div>
                <ul className="text-sm text-blue-800 space-y-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckOutlined className="text-xs" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between pt-4">
                <Button onClick={prevStep} size="large">
                  Back
                </Button>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  loading={loading}
                  size="large"
                  icon={<CheckOutlined />}
                >
                  {loading ? 'Processing...' : 'Complete Purchase'}
                </Button>
              </div>
            </div>
          )}
        </Form>
      </div>
    </Modal>
  );
};

export default PurchaseModal;