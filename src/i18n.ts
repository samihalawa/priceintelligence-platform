import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.features': 'Features',
      'nav.pricing': 'Pricing',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.demo': 'Live Demo',
      
      // Hero Section
      'hero.title': 'AI-Powered Price Intelligence & Optimization',
      'hero.subtitle': 'PriceIntelligence Platform uses advanced AI to analyze market trends, monitor competitors, and optimize your pricing strategy in real-time, increasing revenue by an average of 25%.',
      'hero.cta.primary': 'Start Free Trial',
      'hero.cta.secondary': 'Watch Demo',
      'hero.trust': 'Trusted by 1,500+ businesses worldwide',
      
      // Features Section
      'features.title': 'Advanced Price Intelligence Features',
      'features.subtitle': 'Comprehensive tools for data-driven pricing decisions and competitive advantage',
      'feature.pricing.title': 'Dynamic Pricing Engine',
      'feature.pricing.desc': 'AI-powered pricing algorithms that automatically adjust prices based on demand, competition, and market conditions.',
      'feature.monitoring.title': 'Competitor Price Monitoring',
      'feature.monitoring.desc': 'Real-time monitoring of competitor prices across multiple channels with automated alerts and insights.',
      'feature.analytics.title': 'Market Trend Analysis',
      'feature.analytics.desc': 'Advanced analytics to identify market trends, seasonal patterns, and pricing opportunities.',
      'feature.recommendations.title': 'AI Price Recommendations',
      'feature.recommendations.desc': 'Machine learning models that provide optimal pricing recommendations based on historical data and market analysis.',
      'feature.forecasting.title': 'Revenue Forecasting',
      'feature.forecasting.desc': 'Predictive analytics to forecast revenue impact of pricing changes and optimize profit margins.',
      'feature.integration.title': 'ERP/BI Integration',
      'feature.integration.desc': 'Seamless integration with your existing ERP and Business Intelligence systems.',
      
      // Demo Section
      'demo.title': 'Interactive Pricing Dashboard Demo',
      'demo.subtitle': 'Experience the power of AI-driven price intelligence with our live interactive demo',
      'demo.monitoring.title': 'Competitor Monitoring',
      'demo.monitoring.subtitle': 'Real-time price tracking',
      'demo.analytics.title': 'Market Analytics',
      'demo.analytics.subtitle': 'Trend analysis and insights',
      'demo.recommendations.title': 'AI Recommendations',
      'demo.recommendations.subtitle': 'Smart pricing suggestions',
      'demo.forecasting.title': 'Revenue Forecasting',
      'demo.forecasting.subtitle': 'Predictive analytics',
      
      // Pricing
      'pricing.title': 'Flexible Pricing Plans',
      'pricing.subtitle': 'Scale your price intelligence with plans designed for businesses of all sizes',
      'pricing.starter.name': 'Starter',
      'pricing.starter.price': '$79',
      'pricing.starter.period': '/month',
      'pricing.professional.name': 'Professional',
      'pricing.professional.price': '$199',
      'pricing.professional.period': '/month',
      'pricing.enterprise.name': 'Enterprise',
      'pricing.enterprise.price': 'Custom',
      'pricing.enterprise.period': '',
      'pricing.cta': 'Start Free Trial',
      
      // Testimonials
      'testimonials.title': 'Customer Success Stories',
      'testimonials.subtitle': 'See how businesses are maximizing revenue with AI-powered pricing',
      
      // Footer
      'footer.description': 'PriceIntelligence Platform - Harness the power of AI to optimize your pricing strategy and maximize revenue.',
      'footer.product': 'Product',
      'footer.company': 'Company',
      'footer.support': 'Support',
      'footer.legal': 'Legal',
      'footer.copyright': '© 2024 PriceIntelligence Platform. All rights reserved.'
    }
  },
  es: {
    translation: {
      // Navigation
      'nav.home': 'Inicio',
      'nav.features': 'Características',
      'nav.pricing': 'Precios',
      'nav.about': 'Acerca de',
      'nav.contact': 'Contacto',
      'nav.demo': 'Demo en Vivo',
      
      // Hero Section
      'hero.title': 'Inteligencia de Precios y Optimización Impulsada por IA',
      'hero.subtitle': 'PriceIntelligence Platform utiliza IA avanzada para analizar tendencias de mercado, monitorear competidores y optimizar su estrategia de precios en tiempo real, aumentando los ingresos en un promedio del 25%.',
      'hero.cta.primary': 'Comenzar Prueba Gratuita',
      'hero.cta.secondary': 'Ver Demo',
      'hero.trust': 'Confiado por más de 1,500 empresas en todo el mundo',
      
      // Features Section
      'features.title': 'Características Avanzadas de Inteligencia de Precios',
      'features.subtitle': 'Herramientas completas para decisiones de precios basadas en datos y ventaja competitiva',
      'feature.pricing.title': 'Motor de Precios Dinámico',
      'feature.pricing.desc': 'Algoritmos de precios impulsados por IA que ajustan automáticamente los precios según la demanda, competencia y condiciones del mercado.',
      'feature.monitoring.title': 'Monitoreo de Precios de Competidores',
      'feature.monitoring.desc': 'Monitoreo en tiempo real de precios de competidores en múltiples canales con alertas automatizadas e insights.',
      'feature.analytics.title': 'Análisis de Tendencias de Mercado',
      'feature.analytics.desc': 'Análisis avanzados para identificar tendencias de mercado, patrones estacionales y oportunidades de precios.',
      'feature.recommendations.title': 'Recomendaciones de Precios IA',
      'feature.recommendations.desc': 'Modelos de aprendizaje automático que proporcionan recomendaciones óptimas de precios basadas en datos históricos y análisis de mercado.',
      'feature.forecasting.title': 'Pronóstico de Ingresos',
      'feature.forecasting.desc': 'Analítica predictiva para pronosticar el impacto de los cambios de precios en los ingresos y optimizar márgenes de beneficio.',
      'feature.integration.title': 'Integración ERP/BI',
      'feature.integration.desc': 'Integración perfecta con sus sistemas ERP e Inteligencia de Negocios existentes.',
      
      // Demo Section
      'demo.title': 'Demo Interactivo del Panel de Precios',
      'demo.subtitle': 'Experimenta el poder de la inteligencia de precios impulsada por IA con nuestra demostración interactiva en vivo',
      'demo.monitoring.title': 'Monitoreo de Competidores',
      'demo.monitoring.subtitle': 'Seguimiento de precios en tiempo real',
      'demo.analytics.title': 'Análisis de Mercado',
      'demo.analytics.subtitle': 'Análisis de tendencias e insights',
      'demo.recommendations.title': 'Recomendaciones IA',
      'demo.recommendations.subtitle': 'Sugerencias inteligentes de precios',
      'demo.forecasting.title': 'Pronóstico de Ingresos',
      'demo.forecasting.subtitle': 'Analítica predictiva',
      
      // Pricing
      'pricing.title': 'Planes de Precios Flexibles',
      'pricing.subtitle': 'Escala tu inteligencia de precios con planes diseñados para empresas de todos los tamaños',
      'pricing.starter.name': 'Inicial',
      'pricing.starter.price': '$79',
      'pricing.starter.period': '/mes',
      'pricing.professional.name': 'Profesional',
      'pricing.professional.price': '$199',
      'pricing.professional.period': '/mes',
      'pricing.enterprise.name': 'Empresarial',
      'pricing.enterprise.price': 'Personalizado',
      'pricing.enterprise.period': '',
      'pricing.cta': 'Comenzar Prueba Gratuita',
      
      // Testimonials
      'testimonials.title': 'Historias de Éxito de Clientes',
      'testimonials.subtitle': 'Ve cómo las empresas están maximizando ingresos con precios impulsados por IA',
      
      // Footer
      'footer.description': 'PriceIntelligence Platform - Aprovecha el poder de la IA para optimizar tu estrategia de precios y maximizar ingresos.',
      'footer.product': 'Producto',
      'footer.company': 'Empresa',
      'footer.support': 'Soporte',
      'footer.legal': 'Legal',
      'footer.copyright': '© 2024 PriceIntelligence Platform. Todos los derechos reservados.'
    }
  },
  zh: {
    translation: {
      // Navigation
      'nav.home': '首页',
      'nav.features': '功能特性',
      'nav.pricing': '价格',
      'nav.about': '关于我们',
      'nav.contact': '联系我们',
      'nav.demo': '在线演示',
      
      // Hero Section
      'hero.title': 'AI驱动的价格智能与优化',
      'hero.subtitle': 'PriceIntelligence Platform使用先进的AI分析市场趋势，监控竞争对手，并实时优化您的定价策略，平均增加收入25%。',
      'hero.cta.primary': '开始免费试用',
      'hero.cta.secondary': '观看演示',
      'hero.trust': '全球1,500+企业信赖',
      
      // Features Section
      'features.title': '高级价格智能功能',
      'features.subtitle': '用于数据驱动定价决策和竞争优势的综合工具',
      'feature.pricing.title': '动态定价引擎',
      'feature.pricing.desc': '基于需求、竞争和市场条件的AI驱动定价算法，自动调整价格。',
      'feature.monitoring.title': '竞争对手价格监控',
      'feature.monitoring.desc': '跨多个渠道实时监控竞争对手价格，提供自动警报和洞察。',
      'feature.analytics.title': '市场趋势分析',
      'feature.analytics.desc': '高级分析识别市场趋势、季节性模式和定价机会。',
      'feature.recommendations.title': 'AI价格建议',
      'feature.recommendations.desc': '基于历史数据和市场分析的机器学习模型，提供最优价格建议。',
      'feature.forecasting.title': '收入预测',
      'feature.forecasting.desc': '预测分析预测价格变化的收入影响并优化利润率。',
      'feature.integration.title': 'ERP/BI集成',
      'feature.integration.desc': '与您现有的ERP和商业智能系统无缝集成。',
      
      // Demo Section
      'demo.title': '交互式价格仪表板演示',
      'demo.subtitle': '通过我们的现场交互式演示体验AI驱动的价格智能力量',
      'demo.monitoring.title': '竞争对手监控',
      'demo.monitoring.subtitle': '实时价格跟踪',
      'demo.analytics.title': '市场分析',
      'demo.analytics.subtitle': '趋势分析和洞察',
      'demo.recommendations.title': 'AI建议',
      'demo.recommendations.subtitle': '智能定价建议',
      'demo.forecasting.title': '收入预测',
      'demo.forecasting.subtitle': '预测分析',
      
      // Pricing
      'pricing.title': '灵活的定价计划',
      'pricing.subtitle': '使用为各种规模企业设计的计划扩大您的价格智能',
      'pricing.starter.name': '入门版',
      'pricing.starter.price': '$79',
      'pricing.starter.period': '/月',
      'pricing.professional.name': '专业版',
      'pricing.professional.price': '$199',
      'pricing.professional.period': '/月',
      'pricing.enterprise.name': '企业版',
      'pricing.enterprise.price': '定制',
      'pricing.enterprise.period': '',
      'pricing.cta': '开始免费试用',
      
      // Testimonials
      'testimonials.title': '客户成功案例',
      'testimonials.subtitle': '了解企业如何通过AI驱动的定价最大化收入',
      
      // Footer
      'footer.description': 'PriceIntelligence Platform - 利用AI的力量优化您的定价策略并最大化收入。',
      'footer.product': '产品',
      'footer.company': '公司',
      'footer.support': '支持',
      'footer.legal': '法律',
      'footer.copyright': '© 2024 PriceIntelligence Platform. 保留所有权利。'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;