import { ServicePage } from './ServicePage'

type AccommodationType = '1 BHK' | '2 BHK'

export function AccommodationPage({ type }: { type: AccommodationType }) {
  return (
    <ServicePage
      config={{
        title: `${type} Accommodation`,
        description: `${type} accommodation in Honnavar, Karnataka. Contact Eden Homes to discuss your plans and confirm service details directly with the owner.`,
        pageTitle: `Eden Homes | ${type} Accommodation in Honnavar`,
        metaDescription: `Learn about ${type} accommodation enquiries at Eden Homes in Honnavar, Karnataka. Contact the owner to confirm details and availability.`,
        variant: 'stay',
        imageLabel: `${type} accommodation`,
        enquiryLabel: `Ask about ${type}`,
      }}
    />
  )
}
