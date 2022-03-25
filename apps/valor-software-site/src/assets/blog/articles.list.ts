export const articlesList = [
    'TagTide_library_make_your_HTML_editor-friendly_and_more',
    'Diving_into_seeking_issue_with_MP3_files',
    'Performance_Testing_via_Artillery.io',
    'ARC___a_new_weapon_against_accessibility_bugs',
    'Setting_up_your_project_on_GCP_fast_using_Terraform_and_Kubernetes',
    'ngx-bootstrap_v7.0.0_is_officially_released!',
    'How_to_deploy_Firebase_Preview_Channels_on_Travis_CI',
    'Scully_Helped_us_Reach_a_99_Lighthouse_Score_for_a_B2C_Platform',
    'Designing_Aggregator_App_from_A_to_Z___Part_2',
    'Designing_Aggregator_App_from_A_to_Z___Part_1',
    'Multi-highlighting_for_DraftJS',
    'New_year,_new_Valor,_new_you',
    'Incorporating_user_research_on_live_projects___Part_4',
    'Incorporating_user_research_on_live_projects___Part_3',
    'Incorporating_user_research_on_live_projects___Part_2',
    'Incorporating_user_research_on_live_projects___Part_1',
    'Why_you_might_want_to_switch_to_Time_and_Material_from_Fixed_Price',
    'Cross-Site_Scripting_(XSS)_a_QA_Engineer\'s_Guide',
    'Career_Path_for_a_Flat-structured_company',
    'JSON_Web_Token_Authorization_with_Access_and_Refresh_Tokens_in_Angular_Application_with_Node.js_Server',
    'Testing_iOS_App_Vulnerabilities_with_Jailbreaking._Part_1.',
    'Benefits_of_Agile_to_Business_and_Team',
    'Valor_Software_Named_Top_Development_Company_in_Ukraine_by_Clutch',
    'Testing_with_Protractor_how_to_fix_synchronization_issues',
    'Hacktoberfest_2019_is_coming,_and_ngx-bootstrap_strives_for_your_attention!',
    'The_4_biggest_lessons_we_learned_while_building_a_startup_product_as_an_outsource_company',
    'Angular_and_SEO_Structured_Data_for_Rich_Snippets',
    'ngx-bootstrap_Angular_Ivy_is_here',
    'Webflow_custom_code_snippets_you_would_use._Episode_1',
    'Testing_Canvas_could_be_easier',
    'Case_study_of_Applitools_or_not_only_Cypress_cross-browser_testing',
    'Figma_as_a_presentation_tool_Unifying_templates',
    'Cypress_testing_Running_tests_in_parallel',
    'Quality_Assured_What_It_Really_Takes_To_Test_Open_Source_Libraries',
    'Figma_Vs_Sketch_Text_alignment_comparison',
    'Como_o_Scully_nos_ajudou_a_atingir_99_pontos_no_Lighthouse_para_uma_plataforma_B2C'
];

export interface IArticle {
    author?: string;
    authorImg?: string;
    domains: string[];
    language: string;
    bgImg: string;
    title: string;
    position?: string;
    date: string;
    content: string;
}