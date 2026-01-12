// Template Definitions
const templates = {
    welcome: {
        name: 'Welcome Hero',
        fields: {
            logoImage: { label: 'Logo Image (Upload)', type: 'file', default: '' },
            companyLogo: { label: 'Company Logo/Name (Text)', type: 'text', default: 'NUERALIX' },
            coverImage: { label: 'Cover Image (Building/Background)', type: 'file', default: 'silas-baisch.jpg' },
            coverTitle: { label: 'Cover Title', type: 'text', default: 'Creative' },
            coverMainTitle: { label: 'Cover Main Title', type: 'text', default: 'COMPANY PROFILE' },
            coverYear: { label: 'Year/Subtitle', type: 'text', default: '2030' },
            faxNumber: { label: 'Fax Number', type: 'text', default: '000 1234 5678' },
            emailAddress: { label: 'Email Address', type: 'text', default: 'email@youraddress.here' },
            phoneNumber: { label: 'Phone Number', type: 'text', default: '000 1234 5678' },
            websiteUrl: { label: 'Website URL', type: 'text', default: 'www.website.here' },
            topText: { label: 'About Us Content', type: 'textarea', rows: 8, default: 'Nueralix is a health technology company focused on building responsible, clinician-centred AI systems for real-world healthcare. We work at the intersection of medicine, research, and applied artificial intelligence, with a clear belief that technology should strengthen—not replace—clinical judgement and human care. Our work is grounded in close collaboration with clinicians, researchers, and health institutions, particularly in settings where resources are constrained and the need for efficiency, clarity, and continuity of care is greatest. We design tools that fit into existing clinical workflows, respect professional accountability, and prioritise safety, transparency, and usability. Nueralix approaches AI development as a research-led, evidence-driven process. We focus on careful evaluation in real clinical environments, learning from frontline practice, and iterating responsibly based on empirical findings. Our goal is not automation for its own sake, but practical augmentation—supporting clinicians to deliver consistent, high-quality care at scale. Through partnerships with hospitals, academic institutions, and healthcare professionals, we aim to contribute to a future where thoughtfully designed AI tools help make quality care more accessible, equitable, and sustainable.' },
            mainHeading: { label: 'Page Heading (WHO WE ARE)', type: 'text', default: 'WHO WE ARE' },
            subheading: { label: 'Subtitle', type: 'text', default: 'Message' },
            heroImage: { label: 'Bottom Image (Portrait)', type: 'file', default: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80' },
            accentColor: { label: 'Underline Accent Color', type: 'color', default: '#8B1538' }
        },
        render: (data) => `
            <div class="page page-left welcome-cover-page">
                <div class="page-number">04</div>
                <img src="${data.coverImage}" alt="Cover Background" class="welcome-cover-fullbg">
                <div class="welcome-cover-overlay"></div>
                <div class="welcome-cover-container">
                    <div class="welcome-cover-logo">
                        ${data.logoImage && data.logoImage.startsWith('data:image') ? 
                            `<img src="${data.logoImage}" alt="Logo" class="logo-uploaded">` : 
                            '<div class="logo-icon"></div>'}
                        <span>${data.companyLogo}</span>
                    </div>
                    
                    <div class="welcome-cover-content">
                        <div class="welcome-cover-text">
                            <p class="cover-title-small">${data.coverTitle}</p>
                            <h1 class="cover-title-large">${data.coverMainTitle}</h1>
                            <p class="cover-year">${data.coverYear}</p>
                        </div>
                    </div>
                    
                    <div class="welcome-cover-footer">
                        <div class="footer-left">
                            <p><strong>Fax:</strong> ${data.faxNumber}</p>
                            <p><strong>Email:</strong> ${data.emailAddress}</p>
                        </div>
                        <div class="footer-right">
                            <p>For further info</p>
                            <p>contact us on:</p>
                            <p class="phone-large">${data.phoneNumber}</p>
                            <p>Or visit website:</p>
                            <p class="website-large">${data.websiteUrl}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page page-right welcome-right-aboutus">
                <div class="page-number">05</div>
                <div class="aboutus-layout">
                    <div class="aboutus-header-section">
                        <h1 class="aboutus-heading">${data.mainHeading}</h1>
                        <div class="aboutus-underline"></div>
                        <p class="aboutus-subtitle">${data.subheading}</p>
                    </div>
                    <div class="aboutus-content-section">
                        <p>${data.topText.replace(/\n/g, '<br>')}</p>
                    </div>
                    <div class="aboutus-image-section">
                        <img src="${data.heroImage}" alt="Hero Image" class="aboutus-hero-image">
                    </div>
                </div>
            </div>
        `
    },
    
    toc: {
        name: 'Table of Contents',
        fields: {
            sectionHeading: { label: 'Section Heading (top)', type: 'text', default: 'Organization' },
            item1: { label: 'Item 1', type: 'text', default: 'Who We Are' },
            item1Color: { label: 'Item 1 Color', type: 'color', default: '#A855F7' },
            item2: { label: 'Item 2', type: 'text', default: 'What We Do' },
            item2Color: { label: 'Item 2 Color', type: 'color', default: '#60A5FA' },
            item3: { label: 'Item 3', type: 'text', default: 'Quality Policy' },
            item3Color: { label: 'Item 3 Color', type: 'color', default: '#14B8A6' },
            item4: { label: 'Item 4', type: 'text', default: 'Safety Policy' },
            item4Color: { label: 'Item 4 Color', type: 'color', default: '#EF4444' },
            item5: { label: 'Item 5', type: 'text', default: 'International Co-operation' },
            item5Color: { label: 'Item 5 Color', type: 'color', default: '#CA8A04' },
            item6: { label: 'Item 6', type: 'text', default: 'Projects' },
            item6Color: { label: 'Item 6 Color', type: 'color', default: '#9CA3AF' },
            tocMainHeading: { label: 'Who We Are Heading', type: 'text', default: 'Who we are' },
            tocIntroText: { label: 'Introduction Text', type: 'textarea', rows: 4, default: 'Gharsity Engineering Company GECO with registered capital of 15 million US dollars and is located in Alexandria with a mission to provide specialized and technical engineering services in the field of industrial plants.' },
            tocCompanyDescription: { label: 'Company Description', type: 'textarea', rows: 5, default: 'The Company is set by a group of dedicated, professional and well qualified engineers with rich experience in the professional and portable management of large organizations.' },
            tocMembershipText: { label: 'Membership Text', type: 'text', default: 'GECO is a member of Gharsity Grou.' },
            tocMembershipSubtext: { label: 'Membership Subtext', type: 'text', default: 'which is the holding company for:' },
            tocMember1: { label: 'Member Company 1', type: 'text', default: 'Gharsity Engineering Company (GECO)' },
            tocMember2: { label: 'Member Company 2', type: 'text', default: 'Gharsity for Livestock & Agriculture Development Company (GLADCO)' },
            tocAccentColor: { label: 'Who We Are Accent Color', type: 'color', default: '#8B4A8F' }
        },
        render: (data) => `
            <div class="page page-left toc-black-page">
                <div class="toc-black-container">
                    <p class="toc-black-heading">${data.sectionHeading}</p>
                    <div class="toc-black-list">
                        <div class="toc-black-item" style="color: ${data.item1Color};">${data.item1}</div>
                        <div class="toc-black-item" style="color: ${data.item2Color};">${data.item2}</div>
                        <div class="toc-black-item" style="color: ${data.item3Color};">${data.item3}</div>
                        <div class="toc-black-item" style="color: ${data.item4Color};">${data.item4}</div>
                        <div class="toc-black-item" style="color: ${data.item5Color};">${data.item5}</div>
                        <div class="toc-black-item" style="color: ${data.item6Color};">${data.item6}</div>
                    </div>
                </div>
            </div>
            <div class="page page-right toc-whoweare-page" style="--accent-color: ${data.tocAccentColor};">
                <div class="page-number">07</div>
                <div class="whoweare-content-left">
                    <div class="whoweare-heading-section">
                        <h1 class="whoweare-main-heading">${data.tocMainHeading}</h1>
                        <div class="whoweare-triangle"></div>
                    </div>
                    <div class="whoweare-description">
                        <p class="whoweare-intro">${data.tocIntroText.replace(/\n/g, '<br>')}</p>
                        <p class="whoweare-body">${data.tocCompanyDescription.replace(/\n/g, '<br>')}</p>
                    </div>
                    <div class="whoweare-membership">
                        <p class="whoweare-member-title">${data.tocMembershipText}</p>
                        <p class="whoweare-member-subtitle">${data.tocMembershipSubtext}</p>
                        <ul class="whoweare-member-list">
                            <li>${data.tocMember1}</li>
                            <li>${data.tocMember2}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    
    whoweare: {
        name: 'Who We Are',
        fields: {
            whatWeDoHeading: { label: 'What We Do Heading', type: 'text', default: 'What we do' },
            whatWeDoText: { label: 'What We Do Description', type: 'textarea', rows: 8, default: 'Our company specializes in providing comprehensive engineering solutions and technical services. We focus on delivering high-quality projects that meet international standards and exceed client expectations.\n\nWith years of experience in the industry, we combine innovative approaches with proven methodologies to ensure successful project outcomes. Our team is dedicated to excellence in every aspect of our work.' },
            whatWeDoColor: { label: 'What We Do Accent Color', type: 'color', default: '#60A5FA' },
            rightImage: { label: 'Right Page Background Image', type: 'file', default: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80' },
            objectivesTitle: { label: 'Objectives Title', type: 'text', default: 'The objectives of the Company are' },
            objective1: { label: 'Objective 1', type: 'textarea', rows: 3, default: 'To provide the consultancy of a appropriate services and advanced facilities, plants in the food industry for the establishment of manufacturing factories.' },
            objective2: { label: 'Objective 2', type: 'textarea', rows: 3, default: 'To supply high level equipment programs, engineering and industrial training courses to prepare professionals and advanced.' },
            objective3: { label: 'Objective 3', type: 'textarea', rows: 3, default: 'To provide competitive services, products and solutions leveraging and developing new technology with you.' },
            accentColor: { label: 'Accent Color', type: 'color', default: '#5B8FA3' }
        },
        render: (data) => `
            <div class="page page-left whoweare-left-content" style="--accent-color: ${data.whatWeDoColor};">
                <div class="page-number">06</div>
                <div class="whatwedo-container">
                    <div class="whatwedo-heading-section">
                        <h1 class="whatwedo-main-heading">${data.whatWeDoHeading}</h1>
                        <div class="whatwedo-triangle"></div>
                    </div>
                    <div class="whatwedo-description">
                        <p>${data.whatWeDoText.replace(/\n/g, '<br>')}</p>
                    </div>
                </div>
            </div>
            <div class="page page-right whoweare-right" style="--accent-color: ${data.accentColor};">
                <div class="page-number">07</div>
                <img src="${data.rightImage}" alt="Company Facility" class="whoweare-bg-image">
                <div class="whoweare-objectives-box">
                    <h2 class="whoweare-objectives-title">${data.objectivesTitle}</h2>
                    <ul class="whoweare-objectives-list">
                        <li>${data.objective1.replace(/\n/g, '<br>')}</li>
                        <li>${data.objective2.replace(/\n/g, '<br>')}</li>
                        <li>${data.objective3.replace(/\n/g, '<br>')}</li>
                    </ul>
                </div>
            </div>
        `
    },
    
    qualitypolicy: {
        name: 'Quality Policy',
        fields: {
            backgroundImage: { label: 'Background Image', type: 'file', default: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80' },
            policyTitle: { label: 'Policy Title', type: 'text', default: 'Quality Policy' },
            introText: { label: 'Introduction', type: 'textarea', rows: 3, default: 'Our commitment to quality is fundamental to our success. We strive to exceed customer expectations through continuous improvement and adherence to international standards.' },
            policyItem1: { label: 'Policy Item 1', type: 'textarea', rows: 3, default: 'Maintain the highest standards of quality in all our products and services through rigorous quality control procedures.' },
            policyItem2: { label: 'Policy Item 2', type: 'textarea', rows: 3, default: 'Ensure compliance with all relevant quality management systems and international standards including ISO 9001.' },
            policyItem3: { label: 'Policy Item 3', type: 'textarea', rows: 3, default: 'Continuously train and develop our workforce to maintain excellence in quality delivery and customer satisfaction.' },
            policyItem4: { label: 'Policy Item 4', type: 'textarea', rows: 3, default: 'Implement regular audits and reviews to identify areas for improvement and ensure sustained quality excellence.' },
            commitmentText: { label: 'Commitment Statement', type: 'textarea', rows: 2, default: 'We are committed to delivering quality excellence in every project we undertake.' },
            overlayOpacity: { label: 'Overlay Opacity (%)', type: 'text', default: '75' },
            accentColor: { label: 'Overlay Color', type: 'color', default: '#14B8A6' }
        },
        render: (data) => `
            <div class="page page-left policy-page-image" style="--accent-color: ${data.accentColor}; --overlay-opacity: ${(parseInt(data.overlayOpacity) || 75) / 100};">
                <div class="page-number">08</div>
                <img src="${data.backgroundImage}" alt="Policy Background" class="policy-bg-image">
                <div class="policy-color-overlay"></div>
                <div class="policy-container">
                    <div class="policy-header">
                        <h1 class="policy-title">${data.policyTitle}</h1>
                        <div class="policy-line"></div>
                    </div>
                    <div class="policy-intro">
                        <p>${data.introText.replace(/\n/g, '<br>')}</p>
                    </div>
                    <div class="policy-items">
                        <div class="policy-item">
                            <span class="policy-number">01</span>
                            <p>${data.policyItem1.replace(/\n/g, '<br>')}</p>
                        </div>
                        <div class="policy-item">
                            <span class="policy-number">02</span>
                            <p>${data.policyItem2.replace(/\n/g, '<br>')}</p>
                        </div>
                        <div class="policy-item">
                            <span class="policy-number">03</span>
                            <p>${data.policyItem3.replace(/\n/g, '<br>')}</p>
                        </div>
                        <div class="policy-item">
                            <span class="policy-number">04</span>
                            <p>${data.policyItem4.replace(/\n/g, '<br>')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page page-right policy-page-image" style="--accent-color: ${data.accentColor}; --overlay-opacity: ${(parseInt(data.overlayOpacity) || 75) / 100};">
                <div class="page-number">09</div>
                <img src="${data.backgroundImage}" alt="Policy Background" class="policy-bg-image">
                <div class="policy-color-overlay"></div>
                <div class="policy-commitment">
                    <div class="commitment-icon"></div>
                    <h2 class="commitment-title">Our Commitment</h2>
                    <p class="commitment-text">${data.commitmentText.replace(/\n/g, '<br>')}</p>
                </div>
            </div>
        `
    },
    
    safetypolicy: {
        name: 'Safety Policy',
        fields: {
            backgroundImage: { label: 'Background Image', type: 'file', default: 'https://images.unsplash.com/photo-1581092918484-8313e1f6d6c1?w=1200&q=80' },
            policyTitle: { label: 'Policy Title', type: 'text', default: 'Safety Policy' },
            introText: { label: 'Introduction', type: 'textarea', rows: 3, default: 'Safety is our top priority. We are committed to providing a safe and healthy working environment for all employees, contractors, and stakeholders.' },
            policyItem1: { label: 'Policy Item 1', type: 'textarea', rows: 3, default: 'Ensure zero accidents and injuries through comprehensive safety training, proper equipment, and strict adherence to safety protocols.' },
            policyItem2: { label: 'Policy Item 2', type: 'textarea', rows: 3, default: 'Comply with all occupational health and safety regulations and maintain certifications including OHSAS 18001/ISO 45001.' },
            policyItem3: { label: 'Policy Item 3', type: 'textarea', rows: 3, default: 'Conduct regular safety audits, risk assessments, and emergency drills to ensure preparedness and continuous improvement.' },
            policyItem4: { label: 'Policy Item 4', type: 'textarea', rows: 3, default: 'Empower all personnel to stop work if unsafe conditions are identified and report incidents without fear of reprisal.' },
            commitmentText: { label: 'Commitment Statement', type: 'textarea', rows: 2, default: 'We pledge to maintain the highest standards of safety in all our operations.' },
            overlayOpacity: { label: 'Overlay Opacity (%)', type: 'text', default: '80' },
            accentColor: { label: 'Overlay Color', type: 'color', default: '#EF4444' }
        },
        render: (data) => `
            <div class="page page-left policy-page-image" style="--accent-color: ${data.accentColor}; --overlay-opacity: ${(parseInt(data.overlayOpacity) || 80) / 100};">
                <div class="page-number">10</div>
                <img src="${data.backgroundImage}" alt="Policy Background" class="policy-bg-image">
                <div class="policy-color-overlay"></div>
                <div class="policy-container">
                    <div class="policy-header">
                        <h1 class="policy-title">${data.policyTitle}</h1>
                        <div class="policy-line"></div>
                    </div>
                    <div class="policy-intro">
                        <p>${data.introText.replace(/\n/g, '<br>')}</p>
                    </div>
                    <div class="policy-items">
                        <div class="policy-item">
                            <span class="policy-number">01</span>
                            <p>${data.policyItem1.replace(/\n/g, '<br>')}</p>
                        </div>
                        <div class="policy-item">
                            <span class="policy-number">02</span>
                            <p>${data.policyItem2.replace(/\n/g, '<br>')}</p>
                        </div>
                        <div class="policy-item">
                            <span class="policy-number">03</span>
                            <p>${data.policyItem3.replace(/\n/g, '<br>')}</p>
                        </div>
                        <div class="policy-item">
                            <span class="policy-number">04</span>
                            <p>${data.policyItem4.replace(/\n/g, '<br>')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page page-right policy-page-image" style="--accent-color: ${data.accentColor}; --overlay-opacity: ${(parseInt(data.overlayOpacity) || 80) / 100};">
                <div class="page-number">11</div>
                <img src="${data.backgroundImage}" alt="Policy Background" class="policy-bg-image">
                <div class="policy-color-overlay"></div>
                <div class="policy-commitment">
                    <div class="commitment-icon"></div>
                    <h2 class="commitment-title">Our Commitment</h2>
                    <p class="commitment-text">${data.commitmentText.replace(/\n/g, '<br>')}</p>
                </div>
            </div>
        `
    },
    
    profile: {
        name: 'Profile Feature',
        fields: {
            mainImage: { label: 'Main Image', type: 'file', default: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80' },
            title: { label: 'Article Title', type: 'text', default: 'Sus pernatur mi, sitibus' },
            bodyText: { label: 'Body Text', type: 'textarea', rows: 10, default: 'Odipsandis dolore occullam, sitatet quatiis aut eatur, quam voluptatis autecte nihillu ptaecae conet laciis venditio. Nam faccum quunt aut omnimusdam aut eatius.\n\nConsent labo. Nem facersp ercipienda et es erem qui simi, sum que parit imus excessi minvernat fuga. Nequi sum quae volum explignis doluptatqui dolore porepedis est, omniminciet volori officae. Nam quas res eum eliciis ciasit omnis doluptas doluptur sus quaspiet que voluptatem.\n\nLaceris essum qui que coribus, sus ius doluptas que voluptatem escilit, officidem ut qui corestis dolore oditia sint eicimpo rrovit alibus et, to et omnihillupti blam.' },
            quote: { label: 'Pull Quote', type: 'textarea', rows: 3, default: 'Design is not just what it looks like. Design is how it works.' },
            accentColor: { label: 'Accent Color', type: 'color', default: '#5DADE2' }
        },
        render: (data) => `
            <div class="page page-left">
                <div class="page-number">08</div>
                <div class="profile-container">
                    <div class="profile-image-wrapper">
                        <img src="${data.mainImage}" alt="Profile" class="profile-main-image">
                    </div>
                </div>
            </div>
            <div class="page page-right">
                <div class="page-number">09</div>
                <div class="profile-container">
                    <h2 class="profile-title">${data.title}</h2>
                    <div class="profile-body">${data.bodyText.replace(/\n/g, '<br>')}</div>
                    <div class="profile-quote">${data.quote}</div>
                </div>
            </div>
        `
    },
    
    artistic: {
        name: 'Artistic Feature',
        fields: {
            mainImage: { label: 'Background Image', type: 'file', default: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80' },
            topLeftText: { label: 'Top Left Text', type: 'textarea', rows: 3, default: 'CX NON FINXE LIS SIIS, CATIS, GRATUI FORS PRO VIRIS, HORTIO, PUBLICIO UTEM FECRE TE' },
            bodyTextLeft: { label: 'Body Text (Left)', type: 'textarea', rows: 8, default: 'Empere pro te, nunc poris exerciis porit occullectium et, vitesti, omnim fugit pera pratus sit facepuda ex et is nus est, quid quist ut fuga. Nem facerferum etum conet offictib us, Incia qui nem omni sit, cus.' },
            bodyTextRight: { label: 'Body Text (Right)', type: 'textarea', rows: 8, default: 'Nem ra dolibus conesed moluptas, que labo. Nem estrunt uratibus landi dolo dolut exeres cus. Uptatius dolo dolorem nosa volor reptis, cus ius doluptas que voluptatem escilit, officidem ut qui corestis dolore.' },
            largeLetterLine1: { label: 'Large Letter (Line 1)', type: 'text', default: 'E' },
            largeLetterLine2: { label: 'Large Letter (Line 2)', type: 'text', default: '' },
            rightSideText: { label: 'Right Side Text', type: 'textarea', rows: 5, default: 'mprat pra it.Ucilit labore vent, te seni-lit.Bem imus virid virnililus, seremqu issules? Quam aliu condam am huit.' },
            accentColor: { label: 'Accent Color', type: 'color', default: '#5DADE2' }
        },
        render: (data) => `
            <div class="page page-left artistic-left">
                <div class="page-number">08</div>
                <div class="artistic-background">
                    <img src="${data.mainImage}" alt="Artistic Background" class="artistic-bg-image">
                    <div class="artistic-overlay"></div>
                </div>
                <div class="artistic-content-left">
                    <div class="artistic-top-left">
                        <p>${data.topLeftText}</p>
                    </div>
                    <div class="artistic-body-columns">
                        <div class="artistic-column"><p>${data.bodyTextLeft}</p></div>
                        <div class="artistic-column"><p>${data.bodyTextRight}</p></div>
                    </div>
                </div>
            </div>
            <div class="page page-right artistic-right">
                <div class="page-number">09</div>
                <div class="artistic-content-right">
                    <div class="artistic-large-letter">
                        <span class="letter-line">${data.largeLetterLine1}</span>
                        ${data.largeLetterLine2 ? `<span class="letter-line">${data.largeLetterLine2}</span>` : ''}
                    </div>
                    <div class="artistic-right-text">
                        <p>${data.rightSideText}</p>
                    </div>
                </div>
            </div>
        `
    },
    
    quote: {
        name: 'Quote & Image',
        fields: {
            mainImage: { label: 'Main Image', type: 'file', default: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&q=80' },
            quoteText: { label: 'Main Quote', type: 'textarea', rows: 3, default: 'Fugia dolendi nditae laci ium fa' },
            bodyText: { label: 'Body Text', type: 'textarea', rows: 8, default: 'Odipsandis dolore occullam, sitatet quatiis aut eatur, quam voluptatis autecte nihillu ptaecae conet laciis venditio. Nam faccum quunt aut omnimusdam aut eatius.\n\nConsent labo. Nem facersp ercipienda et es erem qui simi, sum que parit imus excessi minvernat fuga. Nequi sum quae volum explignis doluptatqui dolore porepedis est, omniminciet volori officae.' },
            highlightText: { label: 'Highlight Box', type: 'textarea', rows: 2, default: 'Prumqui quamus et, odit que con consectur autatur?' },
            accentColor: { label: 'Accent Color', type: 'color', default: '#4A9FB8' }
        },
        render: (data) => `
            <div class="page page-left">
                <div class="page-number">10</div>
                <div class="quote-image-container">
                    <img src="${data.mainImage}" alt="Quote Image" class="quote-main-image">
                </div>
                <div class="quote-text-large">
                    <span class="initial">${data.quoteText.charAt(0)}</span>${data.quoteText.slice(1)}
                </div>
            </div>
            <div class="page page-right">
                <div class="page-number">11</div>
                <div style="padding-top: 60px;">
                    <div class="quote-body-text">${data.bodyText.replace(/\n/g, '<br>')}</div>
                    <div class="quote-highlight-box">${data.highlightText}</div>
                </div>
            </div>
        `
    }
};

// Current state
let currentTemplate = 'welcome';
let templateData = {};
let uploadedImages = {};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 Initializing Bronchure Editor...');
    console.log('📋 Available templates:', Object.keys(templates));
    
    // Load saved data first
    loadFromLocalStorage();
    
    // Then render with loaded data
    renderFields();
    renderPreview();
    
    // Setup interactions
    setupEventListeners();
    checkViewportAndShowHint();
    
    console.log('✅ Bronchure Editor Ready with', Object.keys(templates).length, 'Templates!');
    console.log('💡 Current template:', currentTemplate);
    console.log('📊 Current templateData keys:', Object.keys(templateData));
});

// Show hint on narrow screens
function checkViewportAndShowHint() {
    const hint = document.getElementById('previewHint');
    if (hint && window.innerWidth < 1200) {
        hint.style.display = 'block';
    }
}

window.addEventListener('resize', checkViewportAndShowHint);

// Setup event listeners
function setupEventListeners() {
    const templateSelect = document.getElementById('templateSelect');
    console.log('📌 Setting up event listeners...');
    console.log('📌 Template select element:', templateSelect);
    console.log('📌 Template select options:', templateSelect.options.length);
    
    templateSelect.addEventListener('change', function(e) {
        console.log('🔄 Template changed to:', e.target.value);
        currentTemplate = e.target.value;
        renderFields();
        renderPreview();
        saveToLocalStorage();
        showSaveIndicator();
    });
    
    document.getElementById('resetBtn').addEventListener('click', resetTemplate);
    document.getElementById('exportBtn').addEventListener('click', exportToPDF);
    document.getElementById('debugBtn').addEventListener('click', showStorageDebug);
}

// Render form fields based on template
function renderFields() {
    const fieldsContainer = document.getElementById('templateFields');
    const template = templates[currentTemplate];
    
    let html = '';
    
    for (const [fieldKey, field] of Object.entries(template.fields)) {
        // Use saved data if available, otherwise use default
        const value = templateData[fieldKey] !== undefined ? templateData[fieldKey] : field.default;
        
        html += `<div class="control-group">`;
        html += `<label>${field.label}</label>`;
        
        if (field.type === 'text') {
            html += `<input type="text" id="${fieldKey}" value="${escapeHtml(value)}" data-field="${fieldKey}">`;
        } else if (field.type === 'textarea') {
            const rows = field.rows || 4;
            html += `<textarea id="${fieldKey}" rows="${rows}" data-field="${fieldKey}">${escapeHtml(value)}</textarea>`;
        } else if (field.type === 'color') {
            html += `<input type="color" id="${fieldKey}" value="${value}" data-field="${fieldKey}">`;
        } else if (field.type === 'file') {
            html += `<input type="file" id="${fieldKey}" accept="image/*" data-field="${fieldKey}">`;
            if (value && value.startsWith('data:image')) {
                html += `<small style="color: #28a745;">✓ Image uploaded</small>`;
            } else {
                html += `<small>Upload your image</small>`;
            }
        }
        
        html += `</div>`;
    }
    
    fieldsContainer.innerHTML = html;
    
    // Attach event listeners to new fields
    fieldsContainer.querySelectorAll('input, textarea').forEach(element => {
        if (element.type === 'file') {
            element.addEventListener('change', handleImageUpload);
        } else {
            element.addEventListener('input', function(e) {
                const fieldKey = e.target.dataset.field;
                templateData[fieldKey] = e.target.value;
                renderPreview();
                saveToLocalStorage();
                showSaveIndicator();
            });
            
            // Add focus effects
            element.addEventListener('focus', function() {
                this.style.borderColor = getComputedStyle(document.documentElement)
                    .getPropertyValue('--accent-color');
            });
            element.addEventListener('blur', function() {
                this.style.borderColor = '#ddd';
            });
        }
    });
}

// Helper function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Handle image uploads
function handleImageUpload(e) {
    const file = e.target.files[0];
    const fieldKey = e.target.dataset.field;
    
    if (file) {
        console.log('📸 Uploading image for field:', fieldKey);
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageData = event.target.result;
            console.log('✅ Image loaded, size:', (imageData.length / 1024).toFixed(2), 'KB');
            
            // Store in both places for redundancy
            uploadedImages[fieldKey] = imageData;
            templateData[fieldKey] = imageData;
            
            console.log('💾 Image saved to templateData and uploadedImages');
            
            // Re-render everything
            renderPreview();
            renderFields(); // Re-render to show upload indicator
            saveToLocalStorage();
            showSaveIndicator();
        };
        reader.readAsDataURL(file);
    }
}

// Render preview
function renderPreview() {
    const spread = document.getElementById('magazineSpread');
    const template = templates[currentTemplate];
    
    // Merge current data with defaults, but prefer saved data (including empty strings)
    const data = {};
    for (const [fieldKey, field] of Object.entries(template.fields)) {
        // Check if we have saved data for this field (undefined means not set, empty string is valid)
        if (templateData[fieldKey] !== undefined && templateData[fieldKey] !== null) {
            data[fieldKey] = templateData[fieldKey];
        } else {
            data[fieldKey] = field.default;
        }
    }
    
    // Update accent color
    const accentColor = data.accentColor || '#4A9FB8';
    document.documentElement.style.setProperty('--accent-color', accentColor);
    
    // Debug: Log image fields
    const imageFields = Object.entries(data)
        .filter(([key, value]) => typeof value === 'string' && value.startsWith('data:image'));
    if (imageFields.length > 0) {
        console.log('🖼️ Rendering with', imageFields.length, 'image(s)');
    }
    
    // Render template
    spread.innerHTML = template.render(data);
    spread.className = 'magazine-spread template-' + currentTemplate;
}

// Reset template
function resetTemplate() {
    const template = templates[currentTemplate];
    
    // Reset data to defaults
    for (const [fieldKey, field] of Object.entries(template.fields)) {
        templateData[fieldKey] = field.default;
    }
    
    // Clear uploaded images
    uploadedImages = {};
    
    // Re-render
    renderFields();
    renderPreview();
    saveToLocalStorage();
}

// Export to PDF
function exportToPDF() {
    // Show helpful instructions
    const instructions = 'IMPORTANT - To preserve colors and images:\n\n' +
        '1. In print dialog, find "More settings" or "Options"\n' +
        '2. CHECK "Background graphics" (REQUIRED)\n' +
        '3. Set Margins to "None" or "Minimum"\n' +
        '4. Verify "Scale" is set to 100%\n\n' +
        'Without background graphics enabled, your design will appear blank!\n\n' +
        'Ready to print?';
    
    if (confirm(instructions)) {
        window.print();
    }
}

// Save to localStorage
function saveToLocalStorage() {
    try {
        const saveData = {
            currentTemplate,
            templateData,
            uploadedImages
        };
        localStorage.setItem('bronchureData', JSON.stringify(saveData));
        console.log('💾 Data saved to localStorage');
    } catch (e) {
        console.error('Error saving to localStorage:', e);
        // If quota exceeded, try to save without images
        if (e.name === 'QuotaExceededError') {
            console.warn('⚠️ Storage quota exceeded. Saving without images.');
            const saveData = {
                currentTemplate,
                templateData: Object.fromEntries(
                    Object.entries(templateData).filter(([key, value]) => 
                        typeof value === 'string' && !value.startsWith('data:image')
                    )
                ),
                uploadedImages: {}
            };
            try {
                localStorage.setItem('bronchureData', JSON.stringify(saveData));
            } catch (e2) {
                console.error('Failed to save even without images:', e2);
            }
        }
    }
}

// Load from localStorage
function loadFromLocalStorage() {
    const saved = localStorage.getItem('bronchureData');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            currentTemplate = data.currentTemplate || 'welcome';
            templateData = data.templateData || {};
            uploadedImages = data.uploadedImages || {};
            
            // Ensure uploaded images are in templateData
            for (const [key, value] of Object.entries(uploadedImages)) {
                if (value && value.startsWith('data:image')) {
                    templateData[key] = value;
                }
            }
            
            // Set template selector
            document.getElementById('templateSelect').value = currentTemplate;
            
            console.log('✅ Loaded saved data from browser storage');
            console.log('📝 Template:', currentTemplate);
            console.log('💾 Saved fields:', Object.keys(templateData).length);
            console.log('🖼️ Uploaded images:', Object.keys(uploadedImages).length);
            
            // Log which fields have images
            const imageFields = Object.entries(templateData)
                .filter(([key, value]) => typeof value === 'string' && value.startsWith('data:image'))
                .map(([key]) => key);
            if (imageFields.length > 0) {
                console.log('📸 Image fields loaded:', imageFields.join(', '));
            }
        } catch (e) {
            console.error('Error loading saved data:', e);
        }
    } else {
        console.log('ℹ️ No saved data found. Starting fresh.');
    }
}

// Show save indicator
function showSaveIndicator() {
    const hint = document.getElementById('previewHint');
    if (hint) {
        const originalText = hint.innerHTML;
        hint.innerHTML = '💾 <strong>Saved!</strong>';
        hint.style.background = '#d4edda';
        hint.style.color = '#155724';
        hint.style.display = 'block';
        
        setTimeout(() => {
            hint.innerHTML = originalText;
            hint.style.background = '#e3f2fd';
            hint.style.color = '#1976d2';
            if (window.innerWidth >= 1200) {
                hint.style.display = 'none';
            }
        }, 1500);
    }
}

// Debug storage status
function showStorageDebug() {
    const saved = localStorage.getItem('bronchureData');
    if (!saved) {
        alert('ℹ️ No data in storage yet.\n\nAdd some content and it will auto-save!');
        return;
    }
    
    try {
        const data = JSON.parse(saved);
        const storageSize = (saved.length / 1024).toFixed(2);
        const imageCount = Object.values(data.templateData || {})
            .filter(v => typeof v === 'string' && v.startsWith('data:image')).length;
        const uploadedImageCount = Object.keys(data.uploadedImages || {}).length;
        
        const message = `Storage Status:\n--------------------\n\nCurrent Template: ${data.currentTemplate || 'none'}\n\nStorage Size: ${storageSize} KB\n\nText Fields: ${Object.keys(data.templateData || {}).length}\n\nImages in templateData: ${imageCount}\nImages in uploadedImages: ${uploadedImageCount}\n\n${imageCount > 0 ? 'Images are saved!' : 'No images saved yet'}\n\n--------------------\nMax storage: ~5-10 MB per domain`;
        
        alert(message);
        console.log('Full storage data:', data);
    } catch (e) {
        alert('Error reading storage: ' + e.message);
    }
}

// Auto-save every 2 seconds
setInterval(saveToLocalStorage, 2000);
