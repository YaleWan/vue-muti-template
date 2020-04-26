module.exports = {
    base: "/muti-page/",
    dest: "dist",
    title: "muti page 文档库",
    description: "muti page 文档库",
    themeConfig: {
        editLinks: false,
        docsDir: "docs",
        nav: [],
        sidebar: [
            {
                title: "专业版",
                collapsable: true,
                children: [
                    "pro/introduction",
                    "pro/header",
                ],
            }
        ],
    },
    plugins: [
        [
          'register-components',
          {
            componentsDir: '../../src/components'
          }
        ]
      ]
};
