import styles from './privacy.module.css';
import { Text } from '@/app/components/Text';

const Privacy = () => {
  return (
    <main className={styles.main}>
      <section className="centerColumnContent maxTextContent">
        <Text el="h1" styleAs="h2">
          Privacy Policy for Reframed Eye Optometry
        </Text>

        <Text el="p" className={styles.subtitle}>
          At Reframed Eye Optometry, your privacy is important to us. This
          Privacy Policy outlines how we collect, use, and protect your personal
          information when you visit our office, use our website, or communicate
          with us.
        </Text>

        <Text el="p" className={styles.subtitle}>
          <em>Effective Date:</em> December 18, 2024
        </Text>

        <ol>
          <li className={styles.listItem}>Information We Collect</li>
          <Text el="p" className={styles.p}>
            We may collect the following types of personal information:
            <ul className={styles.nestedList}>
              <li>
                <em>Personal Details:</em> Name, address, phone number, email
                address, and date of birth.
              </li>
              <li>
                <em>Health Information:</em> Medical history, eye exam results,
                prescriptions, and treatment information.
              </li>
              <li>
                <em>Payment Information:</em> Billing details, payment methods,
                and insurance information.
              </li>
            </ul>
          </Text>
          <li className={styles.listItem}>How We Use Your Information</li>
          <Text el="p" className={styles.p}>
            We use your information to:
            <ul className={styles.nestedList}>
              <li>
                Provide you with eye care services, exams, and treatments.
              </li>
              <li>Schedule and manage appointments.</li>
              <li>Process payments and handle insurance claims.</li>
              <li>Send reminders, updates, or important notices.</li>
              <li>Comply with legal and regulatory requirements.</li>
            </ul>
          </Text>
          <li className={styles.listItem}>How We Protect Your Information</li>
          <Text el="p" className={styles.p}>
            We take security seriously and implement safeguards to protect your
            personal information, including:
            <ul className={styles.nestedList}>
              <li>
                Provide you with eye care services, exams, and treatments.
              </li>
              <li>Secure storage and restricted access to patient records.</li>
              <li>Encryption of sensitive data.</li>
              <li>Staff training on privacy and confidentiality practices.</li>
            </ul>
          </Text>
          <li className={styles.listItem}>Sharing Your Information</li>
          <Text el="p" className={styles.p}>
            We do <b>not sell</b> your information. We may share your data only
            as necessary to:
            <ul className={styles.nestedList}>
              <li>Process insurance claims with your provider.</li>
              <li>
                Comply with legal obligations or respond to regulatory
                authorities.
              </li>
              <li>
                Coordinate care with other healthcare providers at your request.
              </li>
            </ul>
          </Text>
          <li className={styles.listItem}>Your Rights</li>
          <Text el="p" className={styles.p}>
            You have the right to:
            <ul className={styles.nestedList}>
              <li>Access and obtain a copy of your health records.</li>
              <li>Request corrections to your information.</li>
              <li>
                Request that we limit or restrict certain uses of your
                information.
              </li>
            </ul>
          </Text>
          <li className={styles.listItem}>Changes to This Policy</li>
          <Text el="p" className={styles.p}>
            We may update this Privacy Policy from time to time. Any changes
            will be posted in our office and on our website.
          </Text>
          <li className={styles.listItem}>Contact Us</li>
          <Text el="p" className={styles.p}>
            If you have any questions or concerns about this Privacy Policy or
            your personal information, please contact us at:
            <div className={styles.nestedList}>
              <b>Phone:</b> (208) 557-3222
              <br />
              <b>Address:</b> 3508 S 25th E, Idaho Falls, ID 84331
            </div>
          </Text>
        </ol>
        <Text el="p" className={styles.footer}>
          This Privacy Policy complies with applicable privacy laws, including
          the Health Insurance Portability and Accountability Act (HIPAA).
        </Text>
      </section>
    </main>
  );
};

export default Privacy;
