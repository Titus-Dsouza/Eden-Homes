# Database

# Optional future database planning

The initial Eden Homes release does not use Supabase or another database.
Customer enquiry details are not stored by the website; the implemented
enquiry path is a browser-generated WhatsApp message to the owner-provided
configured destination that the visitor manually sends.

Database storage, enquiry history, and an owner dashboard are optional future
upgrades requiring separate approval. No schema, migrations, database
dependencies, or credentials should be added for the current release.
