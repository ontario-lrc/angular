module.exports =
{
	env:
	{
		node: true
	},
	ignorePatterns:
	[
		"node_modules/",
		"dist/",
		".scannerwork/",
		".github/",
		".angular/"
	],
	overrides:
	[
		{
			extends:
			[
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:@angular-eslint/recommended",
				"plugin:@angular-eslint/template/process-inline-templates",
				"angular"
			],
			files:
			[
				"*.ts",
				"*.js"
			],
			parser: "@typescript-eslint/parser",
			plugins:
			[
				"@typescript-eslint",
				"angular",
				"@stylistic/js",
				"@stylistic/ts"
			],
			rules:
			{
				"@angular-eslint/component-selector":
				[
					"error",
					{
						prefix: "ods",
						style: "kebab-case",
						type: "element"
					}
				],
				"@angular-eslint/directive-selector":
				[
					"error",
					{
						prefix: "ods-",
						style: "camelCase",
						type: "attribute"
					}
				],
				"@angular-eslint/no-attribute-decorator": ["error"],
				"@angular-eslint/no-conflicting-lifecycle": ["error"],
				"@angular-eslint/no-forward-ref": ["error"],
				"@angular-eslint/no-pipe-impure": ["error"],
				"@angular-eslint/pipe-prefix":
				[
					"error",
					{
						prefixes:
							[
								"ods"
							]
					}
				],
				"@angular-eslint/prefer-on-push-component-change-detection": ["error"],
				"@angular-eslint/relative-url-prefix": ["error"],
				"@angular-eslint/require-localize-metadata": ["error"],
				"@angular-eslint/sort-lifecycle-methods": ["error"],
				"@angular-eslint/use-lifecycle-interface": ["error"],
				"@angular-eslint/use-pipe-transform-interface": ["error"],

				"@stylistic/js/array-bracket-newline":
				[
					"error",
					"consistent"
				],
				"@stylistic/js/array-bracket-spacing": ["error"],
				"@stylistic/js/array-element-newline":
				[
					"error",
					"consistent"
				],
				"@stylistic/js/arrow-parens": ["error"],
				"@stylistic/js/arrow-spacing": ["error"],
				"@stylistic/js/block-spacing":
				[
					"error",
					"never"
				],
				"@stylistic/js/brace-style":
				[
					"error",
					"allman",
					{
						allowSingleLine: true
					}
				],
				"@stylistic/js/comma-dangle": ["error"],
				"@stylistic/js/comma-spacing": ["error"],
				"@stylistic/js/comma-style": ["error"],
				"@stylistic/js/computed-property-spacing": ["error"],
				"@stylistic/js/dot-location": ["error"],
				"@stylistic/js/eol-last":
				[
					"error",
					"never"
				],
				"@stylistic/js/function-call-argument-newline":
				[
					"error",
					"consistent"
				],
				"@stylistic/js/function-call-spacing": ["error"],
				"@stylistic/js/function-paren-newline":
				[
					"error",
					"multiline-arguments"
				],
				"@stylistic/js/implicit-arrow-linebreak": ["error"],
				"@stylistic/js/indent":
				[
					"error",
					"tab",
					{
						ArrayExpression: 1,
						CallExpression: {arguments: 1},
						FunctionExpression:
						{
							body: 1,
							parameters: 1
						},
						ImportDeclaration: 1,
						MemberExpression: 1,
						ObjectExpression: 1,
						StaticBlock: {body: 1},
						SwitchCase: 1,
						VariableDeclarator: 1,
						flatTernaryExpressions: false,
						ignoreComments: false,
						offsetTernaryExpressions: false,
						outerIIFEBody: 1
					}
				],
				"@stylistic/js/jsx-quotes":
				[
					"error",
					"prefer-double"
				],
				"@stylistic/js/key-spacing":
				[
					"error",
					{
						afterColon: true,
						beforeColon: false,
						mode: "strict"
					}
				],
				"@stylistic/js/keyword-spacing":
				[
					"error",
					{
						after: true,
						overrides:
						{
							for: {after: false},
							if: {after: false},
							while: {after: false}
						}
					}
				],
				"@stylistic/js/lines-around-comment":
				[
					"error",
					{
						afterBlockComment: false,
						afterLineComment: false,
						beforeBlockComment: true,
						beforeLineComment: false
					}
				],
				"@stylistic/js/lines-between-class-members": [
					"error",
					"always",
					{
						exceptAfterSingleLine: true
					}
				],
				"@stylistic/js/multiline-ternary":
				[
					"error",
					"always-multiline"
				],
				"@stylistic/js/new-parens": ["error"],
				"@stylistic/js/no-confusing-arrow":
				[
					"error",
					{
						allowParens: false,
						onlyOneSimpleParam: false
					}
				],
				"@stylistic/js/no-extra-parens": ["error"],
				"@stylistic/js/no-extra-semi": ["error"],
				"@stylistic/js/no-floating-decimal": ["error"],
				"@stylistic/js/no-mixed-operators": ["error"],
				"@stylistic/js/no-mixed-spaces-and-tabs": ["error"],
				"@stylistic/js/no-multi-spaces": ["error"],
				"@stylistic/js/no-multiple-empty-lines":
				[
					"error",
					{
						max: 1,
						maxBOF: 0,
						maxEOF: 0
					}
				],
				"@stylistic/js/no-trailing-spaces": ["error"],
				"@stylistic/js/no-whitespace-before-property": ["error"],
				"@stylistic/js/nonblock-statement-body-position":
				[
					"error",
					"below"
				],
				"@stylistic/js/object-curly-newline":
				[
					"error",
					{
						consistent: true,
						multiline: true
					}
				],
				"@stylistic/js/object-curly-spacing":
				[
					"error",
					"never"
				],
				"@stylistic/js/object-property-newline": ["error"],
				"@stylistic/js/one-var-declaration-per-line":
				[
					"error",
					"initializations"
				],
				"@stylistic/js/padded-blocks":
				[
					"error",
					"never"
				],
				"@stylistic/js/padding-line-between-statements":
				[
					"error",
					{
						blankLine: "always",
						next: "return",
						prev: "*"
					},
					{
						blankLine: "always",
						next: "*",
						prev:
						[
							"const",
							"let",
							"var"
						]
					},
					{
						blankLine: "any",
						next:
						[
							"const",
							"let",
							"var"
						],
						prev:
						[
							"const",
							"let",
							"var"
						]
					},
					{
						blankLine: "always",
						next: "*",
						prev: "directive"
					},
					{
						blankLine: "any",
						next: "directive",
						prev: "directive"
					},
					{
						blankLine: "never",
						next: "*",
						prev:
						[
							"case",
							"default"
						]
					}
				],
				"@stylistic/js/quote-props":
				[
					"error",
					"as-needed"
				],
				"@stylistic/js/quotes":
				[
					"error",
					"double",
					{
						allowTemplateLiterals: true,
						avoidEscape: true
					}
				],
				"@stylistic/js/rest-spread-spacing": ["error"],
				"@stylistic/js/semi": ["error"],
				"@stylistic/js/semi-spacing": ["error"],
				"@stylistic/js/semi-style": ["error"],
				"@stylistic/js/space-before-blocks":
				[
					"error",
					"never"
				],
				"@stylistic/js/space-before-function-paren":
				[
					"error",
					"never"
				],
				"@stylistic/js/space-in-parens": ["error"],
				"@stylistic/js/space-infix-ops": ["error"],
				"@stylistic/js/space-unary-ops": ["error"],
				"@stylistic/js/spaced-comment":
				[
					"error",
					"always",
					{
						block:
						{
							balanced: true,
							exceptions:
							[
								"-",
								"+"
							],
							markers: ["!"]
						},
						line:
						{
							exceptions:
							[
								"-",
								"+"
							],
							markers: ["/"]
						}
					}
				],
				"@stylistic/js/switch-colon-spacing": ["error"],
				"@stylistic/js/template-curly-spacing": ["error"],
				"@stylistic/js/template-tag-spacing":
				[
					"error",
					"always"
				],
				"@stylistic/js/wrap-iife":
				[
					"error",
					"inside",
					{
						functionPrototypeMethods: true
					}
				],
				"@stylistic/js/wrap-regex": ["error"],
				"@stylistic/js/yield-star-spacing":
				[
					"error",
					"before"
				],

				"@stylistic/ts/block-spacing":
				[
					"error",
					"never"
				],
				"@stylistic/ts/brace-style":
				[
					"error",
					"allman",
					{
						allowSingleLine: true
					}
				],
				"@stylistic/ts/comma-dangle": ["error"],
				"@stylistic/ts/comma-spacing": ["error"],
				"@stylistic/ts/function-call-spacing": ["error"],
				"@stylistic/ts/indent":
				[
					"error",
					"tab",
					{
						ArrayExpression: 1,
						CallExpression: {arguments: 1},
						FunctionExpression:
						{
							body: 1,
							parameters: 1
						},
						ImportDeclaration: 1,
						MemberExpression: 1,
						ObjectExpression: 1,
						StaticBlock: {body: 1},
						SwitchCase: 1,
						VariableDeclarator: 1,
						flatTernaryExpressions: false,
						ignoreComments: false,
						offsetTernaryExpressions: false,
						outerIIFEBody: 1
					}
				],
				"@stylistic/ts/key-spacing":
				[
					"error",
					{
						afterColon: true,
						beforeColon: false,
						mode: "strict"
					}
				],
				"@stylistic/ts/keyword-spacing":
				[
					"error",
					{
						after: true,
						overrides:
						{
							for: {after: false},
							if: {after: false},
							while: {after: false}
						}
					}
				],
				"@stylistic/ts/lines-around-comment":
				[
					"error",
					{
						afterBlockComment: false,
						afterLineComment: false,
						allowEnumEnd: true,
						allowEnumStart: true,
						allowInterfaceEnd: true,
						allowInterfaceStart: true,
						allowModuleEnd: true,
						allowModuleStart: true,
						allowTypeEnd: true,
						allowTypeStart: true,
						beforeBlockComment: true,
						beforeLineComment: false
					}
				],
				"@stylistic/ts/lines-between-class-members":
				[
					"error",
					"always",
					{
						exceptAfterOverload: true,
						exceptAfterSingleLine: true
					}
				],
				"@stylistic/ts/member-delimiter-style":
				[
					"error",
					{
						multiline:
						{
							delimiter: "semi",
							requireLast: true
						},
						singleline:
						{
							delimiter: "semi",
							requireLast: false
						}
					}
				],
				"@stylistic/ts/no-extra-parens": ["error"],
				"@stylistic/ts/no-extra-semi": ["error"],
				"@stylistic/ts/padding-line-between-statements":
				[
					"error",
					{
						blankLine: "always",
						next:
						[
							"interface",
							"type"
						],
						prev: "*"
					},
					{
						blankLine: "never",
						next: ["function"],
						prev: "function-overload"
					}
				],
				"@stylistic/ts/quote-props":
				[
					"error",
					"as-needed"
				],
				"@stylistic/ts/quotes":
				[
					"error",
					"double",
					{
						allowTemplateLiterals: true,
						avoidEscape: true
					}
				],
				"@stylistic/ts/semi": ["error"],
				"@stylistic/ts/space-before-blocks":
				[
					"error",
					"never"
				],
				"@stylistic/ts/space-before-function-paren":
				[
					"error",
					"never"
				],
				"@stylistic/ts/space-infix-ops": ["error"],
				"@stylistic/ts/type-annotation-spacing":
				[
					"error",
					{
						after: true,
						before: false,
						overrides:
						{
							arrow:
							{
								before: true
							}
						}
					}
				],

				"@typescript-eslint/func-call-spacing": ["error", "never"],
				"@typescript-eslint/no-inferrable-types": ["off"],
				"@typescript-eslint/semi": ["error", "always"],
				"@typescript-eslint/type-annotation-spacing":
				[
					"error",
					{
						after: true,
						before: false,
						overrides:
						{
							arrow:
							{
								before: true
							}
						}
					}
				],

				"accessor-pairs": ["error"],
				"array-callback-return": ["error"],
				"arrow-body-style":
				[
					"error",
					"always"
				],
				"block-scoped-var": ["error"],
				camelcase: ["error"],
				"capitalized-comments":
				[
					"error",
					"always",
					{
						block:
						{
							ignoreConsecutiveComments: true
						}
					}
				],
				"class-methods-use-this": ["error"],
				complexity:
				[
					"error"
				],
				"consistent-return": ["error"],
				"consistent-this":
				[
					"error",
					"self"
				],
				curly: ["error"],
				"default-case": ["error"],
				"default-case-last": ["error"],
				"dot-notation": ["error"],
				eqeqeq: ["error"],
				"func-name-matching": ["error"],
				"func-names": ["error"],
				"func-style": ["error"],
				"global-require": ["error"],
				"grouped-accessor-pairs": ["error"],
				"guard-for-in": ["error"],
				"id-length":
				[
					"error",
					{
						min: 2
					}
				],
				"logical-assignment-operators":
				[
					"error",
					"never"
				],
				"max-classes-per-file": ["error"],
				"max-depth": ["error"],
				"max-lines-per-function": ["error"],
				"max-nested-callbacks": ["error"],
				"max-params": ["error"],
				"max-statements": ["error"],
				"multiline-comment-style": ["error"],
				"new-cap":
				[
					"error",
					{
						capIsNewExceptions:
						[
							"Component",
							"Host",
							"Input",
							"NgModule",
							"Output",
							"SkipSelf",
							"ViewChildren"
						]
					}
				],
				"no-alert": ["error"],
				"no-array-constructor": ["error"],
				"no-await-in-loop": ["error"],
				"no-bitwise": ["error"],
				"no-caller": ["error"],
				"no-console": ["error"],
				"no-constructor-return": ["error"],
				"no-continue": ["error"],
				"no-div-regex": ["error"],
				"no-duplicate-imports": ["error"],
				"no-else-return": ["error"],
				"no-empty-function": ["error"],
				"no-eq-null": ["error"],
				"no-eval": ["error"],
				"no-extend-native": ["error"],
				"no-extra-bind": ["error"],
				"no-extra-label": ["error"],
				"no-implicit-coercion": ["error"],
				"no-implicit-globals": ["error"],
				"no-implied-eval": ["error"],
				"no-inner-declarations":
				[
					"error",
					"functions"
				],
				"no-invalid-this": ["error"],
				"no-iterator": ["error"],
				"no-label-var": ["error"],
				"no-labels": ["error"],
				"no-lone-blocks": ["error"],
				"no-loop-func": ["error"],
				"no-magic-numbers": ["error"],
				"no-multi-assign": ["error"],
				"no-multi-str": ["error"],
				"no-negated-condition": ["error"],
				"no-nested-ternary": ["error"],
				"no-new": ["error"],
				"no-new-func": ["error"],
				"no-new-wrappers": ["error"],
				"no-object-constructor": ["error"],
				"no-octal-escape": ["error"],
				"no-param-reassign": ["error"],
				"no-plusplus": ["error"],
				"no-promise-executor-return": ["error"],
				"no-proto": ["error"],
				"no-return-assign": ["error"],
				"no-script-url": ["error"],
				"no-self-compare": ["error"],
				"no-sequences": ["error"],
				"no-shadow": ["error"],
				"no-tabs": "off",
				"no-template-curly-in-string": ["error"],
				"no-throw-literal": ["error"],
				"no-undef-init": ["error"],
				"no-undefined": ["error"],
				"no-unexpected-multiline": "off",
				"no-unneeded-ternary": ["error"],
				"no-unreachable-loop": ["error"],
				"no-unused-expressions": ["error"],
				"no-unused-vars":
					[
						"error",
						{
							args: "none",
							ignoreRestSiblings: true,
							varsIgnorePattern: "[iI]gnored"
						}
					],
				"no-use-before-define": ["error"],
				"no-useless-backreference": ["error"],
				"no-useless-call": ["error"],
				"no-useless-computed-key": ["error"],
				"no-useless-concat": ["error"],
				"no-useless-constructor": ["error"],
				"no-useless-rename": ["error"],
				"no-useless-return": ["error"],
				"no-var": ["error"],
				"no-void": ["error"],
				"object-shorthand":
				[
					"error",
					"never"
				],
				"one-var":
				[
					"error",
					"always"
				],
				"operator-assignment":
				[
					"error",
					"never"
				],
				"prefer-arrow-callback": ["error"],
				"prefer-const": ["error"],
				"prefer-numeric-literals": ["error"],
				"prefer-object-has-own": ["error"],
				"prefer-object-spread": ["error"],
				"prefer-promise-reject-errors": ["error"],
				"prefer-regex-literals":
				[
					"error",
					{
						disallowRedundantWrapping: true
					}
				],
				"prefer-rest-params": ["error"],
				"prefer-spread": ["error"],
				"prefer-template": ["error"],
				radix: ["error"],
				"require-atomic-updates": ["error"],
				"require-await": ["error"],
				"sort-imports": ["error"],
				"sort-keys": ["error"],
				strict: ["error"],
				"symbol-description": ["error"],
				"vars-on-top": ["error"],
				yoda: ["error"]
			}
		},
		{
			extends:
			[
				"plugin:@angular-eslint/template/recommended",
				"plugin:@angular-eslint/template/accessibility"
			],
			files:
			[
				"*.html",
				"*.htm"
			],
			rules:
			{
				"@angular-eslint/template/button-has-type": ["error"],
				"@angular-eslint/template/eqeqeq": ["error"],
				"@angular-eslint/template/no-any": ["error"],
				"@angular-eslint/template/no-duplicate-attributes": ["error"],
				"@angular-eslint/template/no-inline-styles": ["error"],
				"@angular-eslint/template/no-interpolation-in-attributes": ["error"],
				"@angular-eslint/template/no-positive-tabindex": ["error"],
				"@angular-eslint/template/role-has-required-aria": ["error"]
			}
		}
	],
	root: true
};