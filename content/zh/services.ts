import type { Service, ServiceCategorySlug, ServiceGroup } from '@/lib/types'

/**
 * Simplified Chinese services catalogue — the same five groups and 44
 * services as `content/en/services.ts`, translated for a Chinese-reading
 * audience. Slugs are NOT derived from the Chinese titles: they are copied
 * verbatim from the English file so `/services/*` URLs stay identical
 * across locales.
 */

function service(
  category: ServiceCategorySlug,
  slug: string,
  title: string,
  summary: string,
): Service {
  return { slug, category, title, summary }
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'business-setup-licensing',
    categorySlug: 'business-setup',
    title: '企业设立与许可',
    summary:
      '从首次注册到持续的许可证续期——助力企业在老挝合法设立并保持合规注册状态。',
    services: [
      service('business-setup', 'company-registration', '公司注册', '与老挝相关部门一起完成新公司的设立。'),
      service('business-setup', 'foreign-investment-registration', '外商投资登记', '为外商投资企业提供注册支持。'),
      service('business-setup', 'representative-office-registration', '代表处注册', '为外国公司设立代表处。'),
      service('business-setup', 'branch-office-registration', '分公司注册', '为现有外国公司注册分公司。'),
      service('business-setup', 'business-license-applications', '营业执照申请', '准备并提交经营许可证申请。'),
      service('business-setup', 'industry-specific-licenses', '行业专属许可证', '受监管行业及经营活动所需的许可证。'),
      service('business-setup', 'tax-registration', '税务登记', '为新企业办理税务部门登记。'),
      service('business-setup', 'social-security-registration', '社会保险登记', '为公司及其员工办理社会保险登记。'),
      service('business-setup', 'company-amendments', '公司信息变更', '更新公司详情、股东信息或注册资料。'),
      service('business-setup', 'business-license-renewal', '营业执照续期', '通过及时续期保持经营许可证的有效性。'),
    ],
  },
  {
    id: 'visa-immigration-services',
    categorySlug: 'visa-immigration',
    title: '签证与移民服务',
    summary:
      '为在老挝生活或工作的专业人士、投资者及其家庭提供签证、工作许可和居留许可支持。',
    services: [
      service('visa-immigration', 'business-visa', '商务签证', '为商务访客和短期任务提供签证支持。'),
      service('visa-immigration', 'investor-visa', '投资者签证', '为设立或投资企业的投资者提供签证支持。'),
      service('visa-immigration', 'work-visa', '工作签证', '为在老挝工作的外籍员工提供签证支持。'),
      service('visa-immigration', 'work-permit', '工作许可', '为外籍员工申请及续期工作许可。'),
      service('visa-immigration', 'long-term-stay-visa', '长期居留签证', '根据具体情况评估的老挝长期居留方案。'),
      service('visa-immigration', 'visa-extension-renewal', '签证延期与续签', '在现有签证到期前进行延期或续签。'),
      service('visa-immigration', 'stay-permit', '居留许可', '为外国居民申请居留许可。'),
      service('visa-immigration', 'immigration-consulting', '移民咨询', '就移民途径及要求提供实用建议。'),
      service('visa-immigration', 'document-preparation', '文件准备', '准备、翻译和整理申请文件。'),
      service('visa-immigration', 'government-liaison', '政府联络', '代表您与相关部门进行协调沟通。'),
    ],
  },
  {
    id: 'corporate-legal-services',
    categorySlug: 'legal-family',
    title: '企业法律服务',
    summary:
      '为在老挝经营的公司提供合同、合规、尽职调查及知识产权方面的支持。',
    services: [
      service('legal-family', 'legal-consulting', '法律咨询', '为在老挝的商业决策提供实用法律指导。'),
      service('legal-family', 'contract-review', '合同审阅', '在您签署合同前以通俗语言进行审阅。'),
      service('legal-family', 'contract-drafting', '合同起草', '为您的企业起草清晰可行的合同。'),
      service('legal-family', 'corporate-compliance', '企业合规', '确保公司义务与申报事项处于良好状态。'),
      service('legal-family', 'due-diligence', '尽职调查', '对合作伙伴、资产及交易进行背景审查。'),
      service('legal-family', 'trademark-registration', '商标注册', '在老挝注册并保护商标。'),
      service('legal-family', 'intellectual-property-support', '知识产权支持', '为保护知识产权提供实用支持。'),
      service('legal-family', 'company-legal-documentation', '公司法律文件', '准备并维护公司核心法律文件。'),
      service('legal-family', 'legal-liaison-support', '法律联络支持', '就法律事务与相关部门及对方进行协调。'),
    ],
  },
  {
    id: 'family-personal-legal-services',
    categorySlug: 'legal-family',
    title: '家庭与个人法律服务',
    summary:
      '为涉及老挝及外国公民的婚姻、家庭文件及长期居留事务提供支持。',
    services: [
      service('legal-family', 'marriage-registration-for-lao-and-foreign-nationals', '老挝与外国公民婚姻登记', '指导跨国婚姻夫妇完成婚姻登记。'),
      service('legal-family', 'marriage-certificate-translation-and-legalisation-support', '结婚证翻译与公证支持', '婚姻文件的翻译与公证认证。'),
      service('legal-family', 'divorce-assistance', '离婚协助', '离婚期间的文件与程序支持。'),
      service('legal-family', 'family-documentation', '家庭文件办理', '准备及更正家庭民事文件。'),
      service('legal-family', 'birth-certificate-support', '出生证明支持', '协助办理出生登记及证明。'),
      service('legal-family', 'family-book-support', '家庭户口簿支持', '协助家庭户口簿的登记与更新。'),
      service('legal-family', 'long-term-stay-support-for-foreign-spouses', '外籍配偶长期居留支持', '为老挝公民的外籍配偶提供居留方案。'),
    ],
  },
  {
    id: 'accounting-tax',
    categorySlug: 'accounting-tax',
    title: '会计与税务',
    summary:
      '记账、税务申报、工资单及年度合规——为您的企业提供可靠的财务基础。',
    services: [
      service('accounting-tax', 'accounting-services', '会计服务', '符合老挝相关要求的会计支持。'),
      service('accounting-tax', 'bookkeeping', '记账服务', '为您的企业提供准确、最新的账簿。'),
      service('accounting-tax', 'tax-registration', '税务登记', '为您的企业办理税务部门登记。'),
      service('accounting-tax', 'tax-filing', '税务申报', '准备并提交定期税务申报。'),
      service('accounting-tax', 'payroll-services', '工资单服务', '为您的团队处理工资单及相关申报。'),
      service('accounting-tax', 'financial-reporting', '财务报告', '为业主及相关部门提供清晰的财务报告。'),
      service('accounting-tax', 'annual-compliance-support', '年度合规支持', '跟踪年度申报及报告义务，确保按时完成。'),
      service('accounting-tax', 'tax-advisory', '税务咨询', '为决策与规划提供实用的税务建议。'),
    ],
  },
]

/** All individual services, flattened (44 items). */
export const allServices: Service[] = serviceGroups.flatMap(
  (group) => group.services,
)

/** Service groups shown on a given category page. */
export function groupsForCategory(slug: ServiceCategorySlug): ServiceGroup[] {
  return serviceGroups.filter((group) => group.categorySlug === slug)
}
