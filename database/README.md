# Database

# Optional future database planning

The initial Eden Homes release does not use Supabase or another database.
Customer enquiry details will not be stored by the website; the planned
enquiry path is a browser-generated WhatsApp message that the visitor manually
sends after the owner confirms the destination number.

Database storage, enquiry history, and an owner dashboard are optional future
upgrades requiring separate approval. No schema, migrations, database
dependencies, or credentials should be added for the current release.
