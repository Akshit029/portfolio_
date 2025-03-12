import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="border-b border-neutral-900  pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-bold"
      >
        GET IN TOUCH
      </motion.h2>

      <div className="text-center tracking-tighter">
        {/* Address */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-neutral-500"
        >
          {CONTACT.address}
        </motion.p>

        {/* Phone Number (Conditional rendering) */}
        {CONTACT.phoneNo && (
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4 text-neutral-500"
          >
            {CONTACT.phoneNo}
          </motion.p>
        )}

        {/* Email with mailto link */}
        <motion.a
          href={`mailto:${CONTACT.email}`}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="border-b text-purple-400 hover:text-purple-700"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
