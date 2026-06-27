## ADDED Requirements

### Requirement: Photography Gallery Page
The system SHALL provide a "Photography" page at the route `/photography` that displays a gallery of images.

#### Scenario: Render Photography page with Ghost content
- **WHEN** a user navigates to `/photography`
- **THEN** the server fetches posts tagged `photography` from Ghost CMS (if any) and renders each image with its title and description in a responsive grid.

#### Scenario: Render Photography page with fallback images
- **WHEN** no Ghost posts are tagged `photography`
- **THEN** the page displays a predefined set of local placeholder images stored in `public/photography/`.
