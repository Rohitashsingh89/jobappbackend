
---

# Authentication Routes (`/api/auth`)

#### POST `/api/auth/register`
- **Description:** Register a new user.
- **Role is optional**
- **Request Body:**
  - `username` (string): User's username.
  - `email` (string): User's email address.
  - `password` (string): User's password.
  - `roles` (array of strings): User roles (e.g., "user", "employer", "admin").
- **Response:** User registration status.

#### POST `/api/auth/login`
- **Description:** Authenticate user and get a JWT token for authorization.
- **Request Body:**
  - `username` (string): User's username.
  - `password` (string): User's password.
- **Response:** JWT token for authenticated user.
- Token saved in session

#### POST `/api/auth/logout`
- **Description:** Sign out the currently authenticated user.
- **Response:** Sign-out status.

# Access Control Routes (`/api/access`)

#### GET `/api/access/all`
- **Description:** Accessible to all users.
- **Response:** Public content.

#### GET `/api/access/user`
- **Description:** Accessible to authenticated users.
- **Response:** User-specific content.

#### GET `/api/access/employer`
- **Description:** Accessible to users with the "employer" role.
- **Response:** Employer-specific content.

#### GET `/api/access/admin`
- **Description:** Accessible to users with the "admin" role.
- **Response:** Admin-specific content.

# Job Routes (`/api/jobs`)

#### POST `/api/jobs`
- **Description:** Create a new job.
- **Request Body:** Job details (title, description, company, category, location, etc.).
- **Response:** Created job details.

#### GET `/api/jobs`
- **Description:** Get all jobs.
- **Response:** List of all jobs.

#### GET `/api/jobs/:id`
- **Description:** Get a specific job by ID.
- **Parameters:** `id` (string) - Job ID.
- **Response:** Job details.

#### PUT `/api/jobs/:id`
- **Description:** Update a specific job by ID.
- **Parameters:** `id` (string) - Job ID.
- **Request Body:** Updated job details.
- **Response:** Updated job details.

#### DELETE `/api/jobs/:id`
- **Description:** Delete a specific job by ID.
- **Parameters:** `id` (string) - Job ID.
- **Response:** Deletion status.

# Category Routes (`/api/category`)

#### POST `/api/category`
- **Description:** Create a new category.
- **Request Body:** Category details (name, description, etc.).
- **Response:** Created category details.

#### GET `/api/category`
- **Description:** Get all categories.
- **Response:** List of all categories.

#### GET `/api/category/:id`
- **Description:** Get a specific category by ID.
- **Parameters:** `id` (string) - Category ID.
- **Response:** Category details.

#### PUT `/api/category/:id`
- **Description:** Update a specific category by ID.
- **Parameters:** `id` (string) - Category ID.
- **Request Body:** Updated category details.
- **Response:** Updated category details.

#### DELETE `/api/category/:id`
- **Description:** Delete a specific category by ID.
- **Parameters:** `id` (string) - Category ID.
- **Response:** Deletion status.

# Job-Category Association Routes (`/api/job-category`)

#### POST `/api/job-category/associate/:jobId/:categoryId`
- **Description:** Associate a job with a category.
- **Parameters:** `jobId` (string) - Job ID, `categoryId` (string) - Category ID.
- **Response:** Association status.

#### DELETE `/api/job-category/disassociate/:jobId/:categoryId`
- **Description:** Disassociate a job from a category.
- **Parameters:** `jobId` (string) - Job ID, `categoryId` (string) - Category ID.
- **Response:** Disassociation status.

### GET `/api/job-category/categories/:jobId`
- **Description:** Get categories associated with a specific job.
- **Parameters:**
- `jobId` (string): ID of the job.
- **Response:** List of categories associated with the specified job.
GET `/api/job-category/jobs/:categoryId`
- **Description:** Get jobs associated with a specific category.
- **Parameters:**
- `categoryId` (string): ID of the category.
- **Response:** List of jobs associated with the specified category.

---
