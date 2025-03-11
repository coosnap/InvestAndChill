import { NoSsr, Paper, Popper, Stack, Typography } from '@mui/material';
import { useAxisTooltip, useMouseTracker } from '@mui/x-charts';
import { generateVirtualElement } from '@mui/x-charts/ChartsTooltip/utils';

export function ItemTooltip() {
  const tooltipData = useAxisTooltip();
  const mousePosition = useMouseTracker();

  if (!tooltipData || !mousePosition) {
    return null;
  }

  const isMousePointer = mousePosition?.pointerType === 'mouse';
  const yOffset = isMousePointer ? 0 : 40 - mousePosition.height;

  return (
    <NoSsr>
      <Popper
        sx={{
          pointerEvents: 'none',
          // opacity: 0.5,
          zIndex: (theme) => theme.zIndex.modal,
        }}
        open
        placement={isMousePointer ? 'top-end' : 'top'}
        anchorEl={generateVirtualElement(mousePosition)}
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, yOffset],
            },
          },
        ]}
      >
        <Paper
          elevation={0}
          sx={{
            m: 1,
            borderWidth: 0,
            borderRadius: 0.5,
            backgroundColor: 'rgba(255, 248, 220, 0.4)',
            thead: {
              td: {
                px: 1,
                py: 0.5,
              },
            },
            tbody: {
              tr: {
                td: {
                  paddingLeft: '8px',
                  paddingRight: '8px',
                },
              },
            },
          }}
        >
          <table>
            <thead>
              <tr>
                <td
                  colSpan={3}
                  style={{ borderWidth: 0, borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
                >
                  <Typography fontSize={12} sx={{ fontWeight: 'bold' }}>
                    {tooltipData.axisFormattedValue}
                  </Typography>
                </td>
              </tr>
            </thead>
            <tbody>
              {tooltipData.seriesItems.map((seriesItem) => (
                <tr key={seriesItem.seriesId}>
                  <td style={{ borderWidth: 0 }}>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: seriesItem.color,
                      }}
                    />
                  </td>
                  <td style={{ borderWidth: 0 }}>
                    <Typography fontSize={10} sx={{ fontWeight: 'bold' }}>
                      {seriesItem.formattedLabel}
                    </Typography>
                  </td>
                  <td style={{ textAlign: 'right', borderWidth: 0 }}>
                    <Typography fontSize={10} sx={{ fontWeight: 'bold' }}>
                      {seriesItem.formattedValue}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Paper>
      </Popper>
    </NoSsr>
  );
}
